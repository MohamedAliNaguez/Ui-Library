const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Access the MongoDB URI from environment variables
const mongoString = process.env.MONGO_STRING;

if (!mongoString || (!mongoString.startsWith('mongodb://') && !mongoString.startsWith('mongodb+srv://'))) {
  console.error('Invalid MongoDB connection string');
  console.log(mongoString);
  process.exit(1);
}

// MongoDB connection setup 
mongoose.connect(mongoString)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });

// Define Component Schema and Model
const ComponentSchema = new mongoose.Schema({
  name: String,
  selector: String,
  description: String,
  usage: String,
  path: String,
  category: String
});

const Component = mongoose.model('Component', ComponentSchema);

// Middleware setup
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON requests

// Define API routes
app.get('/api/components', async (req, res) => {
  try {
    const components = await Component.find({});
    res.json(components);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// New route to serve HTML content
app.get('/api/preview/:componentId', async (req, res) => {
  const componentId = req.params.componentId;

  try {
    const component = await Component.findById(componentId);
    if (component) {
      // Create a basic HTML document containing the usage field
      const htmlContent = `
      
        <div>
          ${component.usage}
        </div>
       
      `;
      res.send(htmlContent);
    } else {
      res.status(404).send('Component not found');
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
