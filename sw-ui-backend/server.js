const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package
const app = express();
const port = 3000;

// MongoDB connection setup
mongoose.connect('MONGO_STRING');

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

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
