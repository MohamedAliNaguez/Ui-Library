const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Directories containing the components
const componentDirs = ['buttons', 'navbars', 'drop-lists'];
// Path to the library source
const libPath = path.join(__dirname, 'projects', 'sw-ui', 'src', 'lib');
// Path where the TypeScript metadata file will be saved
const metadataFilePath = path.join(libPath, 'components-metadata.ts');
// Path where the JSON metadata file will be saved
const jsonMetadataFilePath = path.join(libPath, 'components-metadata.json');

// Function to extract the component selector name from the component file
function getComponentName(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const match = fileContent.match(/selector:\s*'([^']+)'/);
  return match ? match[1] : null;
}

// Function to generate the metadata for the components
function generateMetadata() {
  const metadata = [];

  // Loop through each component directory
  componentDirs.forEach((dir) => {
    // Find all component TypeScript files in the directory
    const componentFiles = glob.sync(path.join(libPath, dir, '**', '*.component.ts'));

    // Process each component file
    componentFiles.forEach((file) => {
      // Extract the component name from the file
      const componentName = getComponentName(file);
      if (componentName) {
        // Get the relative path to the component file
        const componentPath = path.relative(libPath, file).replace(/\\/g, '/');
        // Add the component metadata to the list
        metadata.push({
          name: componentName,
          selector: componentName,
          description: `A description for ${componentName}`,
          usage: `<${componentName}></${componentName}>`,
          path: componentPath,
          category: componentPath.split('/')[0]
        });
      }
    });
  });

  // Convert metadata to TypeScript content
  const metadataContent = `export const componentsMetadata = ${JSON.stringify(metadata, null, 2)};`;
  // Write the TypeScript metadata to file
  fs.writeFileSync(metadataFilePath, metadataContent, 'utf-8');
  console.log(`TypeScript metadata file generated at ${metadataFilePath}`);

  // Write the JSON metadata to file
  fs.writeFileSync(jsonMetadataFilePath, JSON.stringify(metadata, null, 2), 'utf-8');
  console.log(`JSON metadata file generated at ${jsonMetadataFilePath}`);
}

// Generate the metadata
generateMetadata();