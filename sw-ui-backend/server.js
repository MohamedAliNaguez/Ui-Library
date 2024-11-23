const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load environment variables from a .env file
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port, fallback to 3000
const mongoString = process.env.MONGO_STRING; // MongoDB connection string
const JWT_SECRET = process.env.JWT_SECRET; // Secret for JWT signing

// Validate the MongoDB connection string
if (!mongoString || (!mongoString.startsWith('mongodb://') && !mongoString.startsWith('mongodb+srv://'))) {
  console.error('Invalid MongoDB connection string');
  process.exit(1); // Exit process if the MongoDB string is invalid
}

// Connect to MongoDB
mongoose.connect(mongoString)
  .then(() => {
    console.log('Connected to MongoDB'); // Log success message
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err); // Log error details
    process.exit(1); // Exit process on connection failure
  });

// Define the schema for storing UI component metadata
const ComponentSchema = new mongoose.Schema({
  name: String,
  selector: String,
  description: String,
  usage: String,
  code: String,
  path: String,
  category: String
});

// Create a model for components
const Component = mongoose.model('Component', ComponentSchema);

// Define the schema for user authentication
const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  role: String,
  email: { type: String, required: true, unique: true }, // Email must be unique
  password: { type: String, required: true } // Password is required
});

// Modify the default JSON representation of User objects
UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = doc._id; // Replace _id with id
    delete ret.password; // Exclude password from the output
    return ret;
  }
});

// Create a model for users
const User = mongoose.model('User', UserSchema);

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Retrieve all components
app.get('/api/components', async (req, res) => {
  try {
    const components = await Component.find({}); // Fetch all components
    res.json(components); // Return components as JSON
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
});

// Retrieve HTML usage preview for a specific component
app.get('/api/preview/:componentId', async (req, res) => {
  const componentId = req.params.componentId;

  try {
    const component = await Component.findById(componentId); // Find component by ID
    if (component) {
      const htmlContent = `${component.usage}`; // Use the usage field as HTML content
      res.send(htmlContent); // Return the HTML content
    } else {
      res.status(404).send('Component not found'); // Handle missing components
    }
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
});

// Register a new user
app.post('/api/register', async (req, res) => {
  const { name, lastname, role, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email }); // Check if the user already exists
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' }); // Return error if user exists
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password

    // Create a new user and save to the database
    const newUser = new User({ name, lastname, role, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' }); // Success response
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
});

// Authenticate user and return a JWT
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }); // Find user by email
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' }); // Handle invalid email
    }

    const isMatch = await bcrypt.compare(password, user.password); // Compare password
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' }); // Handle incorrect password
    }

    // Sign and return a JWT
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token }); // Return the token
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
});

// Middleware for token authentication
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Get the Authorization header
  const token = authHeader && authHeader.split(' ')[1]; // Extract the token

  if (token == null) return res.sendStatus(401); // Return 401 if token is missing

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Return 403 if token is invalid
    req.user = user; // Attach user data to the request
    next(); // Proceed to the next middleware
  });
};

// Protected route example
app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user }); // Return a success message
});

// Retrieve user details for authenticated users
app.get('/api/user-details', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select('-password'); // Exclude password
    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // Handle missing user
    }
    res.json(user); // Return user details
  } catch (err) {
    res.status(500).json({ error: err.message }); // Handle server errors
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`); // Log server start
});
