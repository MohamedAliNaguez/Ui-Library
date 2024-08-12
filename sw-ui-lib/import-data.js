const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// MongoDB connection setup
mongoose.connect('mongodb+srv://dalynaguez:8MP4N7S03knLVfsS@swlib.sf6hzyx.mongodb.net/swlib');

// Define Component Schema and Model
const ComponentSchema = new mongoose.Schema({
  name: String,
  selector: String,
  description: String,
  usage: String,
  path: String,
  category: String
});

// Use the 'components' collection
const Component = mongoose.model('Component', ComponentSchema, 'components');

// Read JSON file
const filePath = path.join(__dirname, 'projects/sw-ui/src/lib/components-metadata.json'); // Update the path to your JSON file

fs.readFile(filePath, 'utf8', async (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  const components = JSON.parse(data);

  try {
    // Delete existing components before inserting new ones (optional)
    await Component.deleteMany({});

    // Insert new components
    await Component.insertMany(components);
    console.log('Data successfully imported to MongoDB');

  } catch (err) {
    console.error('Error importing data to MongoDB:', err);
  } finally {
    mongoose.connection.close();
  }
});
