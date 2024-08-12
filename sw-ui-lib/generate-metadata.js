const fs = require('fs');
const path = require('path');
const glob = require('glob');

const componentDirs = ['buttons', 'navbars', 'drop-lists'];
const libPath = path.join(__dirname, 'projects', 'sw-ui', 'src', 'lib');
const metadataFilePath = path.join(libPath, 'components-metadata.ts');

function getComponentName(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const match = fileContent.match(/selector:\s*'([^']+)'/);
  return match ? match[1] : null;
}

function generateMetadata() {
  const metadata = [];

  componentDirs.forEach((dir) => {
    const componentFiles = glob.sync(path.join(libPath, dir, '**', '*.component.ts'));

    componentFiles.forEach((file) => {
      const componentName = getComponentName(file);
      if (componentName) {
        const componentPath = path.relative(libPath, file).replace(/\\/g, '/');
        metadata.push({
          name: componentName,
          selector: componentName,
          description: `A description for ${componentName}`,
          usage: `<${componentName}></${componentName}>`,
          path: componentPath,
        });
      }
    });
  });

  const metadataContent = `export const componentsMetadata = ${JSON.stringify(metadata, null, 2)};`;
  fs.writeFileSync(metadataFilePath, metadataContent, 'utf-8');
  console.log(`Metadata file generated at ${metadataFilePath}`);
}

generateMetadata();
