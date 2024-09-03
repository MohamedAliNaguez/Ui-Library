
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000; // Use environment variable for port, fallback to 3000
//const mongoString = process.env.MONGO_STRING;

const mongoString = process.env.MONGO_STRING;
const JWT_SECRET = process.env.JWT_SECRET;

if (!mongoString || (!mongoString.startsWith('mongodb://') && !mongoString.startsWith('mongodb+srv://'))) {
  console.error('Invalid MongoDB connection string');
  process.exit(1);
}

mongoose.connect(mongoString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

const ComponentSchema = new mongoose.Schema({
  name: String,
  selector: String,
  description: String,
  usage: String,
  code: String,
  path: String,
  category: String
});

const Component = mongoose.model('Component', ComponentSchema);

const UserSchema = new mongoose.Schema({
  name: String,
  lastname: String,
  role: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

UserSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    ret.id = doc._id;
    delete ret.password;
    return ret;
  }
});

const User = mongoose.model('User', UserSchema);

app.use(cors());
app.use(express.json());

app.get('/api/components', async (req, res) => {
  try {
    const components = await Component.find({});
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/preview/:componentId', async (req, res) => {
  const componentId = req.params.componentId;

  try {
    const component = await Component.findById(componentId);
    if (component) {
      const htmlContent = `${component.usage}`;
      res.send(htmlContent);
    } else {
      res.status(404).send('Component not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/register', async (req, res) => {
  const { name, lastname, role, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ name, lastname, role, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.get('/api/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
