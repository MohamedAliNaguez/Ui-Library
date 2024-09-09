const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Directories containing the components
const componentDirs = ['buttons', 'navbars', 'drop-lists', 'forms', 'modals'];
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

// Function to read the component HTML content
function getComponentHtml(filePath) {
  const htmlFilePath = filePath.replace('.component.ts', '.component.html');
  if (fs.existsSync(htmlFilePath)) {
    return fs.readFileSync(htmlFilePath, 'utf-8');
  }
  return 'No HTML file found.';
}

// Function to read the component CSS content
function getComponentCss(filePath) {
  const cssFilePath = filePath.replace('.component.ts', '.component.css');
  if (fs.existsSync(cssFilePath)) {
    return fs.readFileSync(cssFilePath, 'utf-8');
  }
  return 'No CSS file found.';
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
        // Get the HTML and CSS content of the component
        const componentHtml = getComponentHtml(file);
        const componentCss = getComponentCss(file);

        // Combine HTML and CSS into a single string
        const combinedCode = `
          <style>
            ${componentCss}
          </style>
          ${componentHtml}
        `;

        // Add the component metadata to the list
        metadata.push({
          name: componentName,
          selector: componentName,
          description: `A description for ${componentName}`,
          usage: `<${componentName}></${componentName}>`,
          code: combinedCode,
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
