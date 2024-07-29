const fs = require('fs');
const path = require('path');

// Paths to relevant files
const srcPath = path.join(__dirname, 'projects', 'sw-ui', 'src', 'lib');
const modulePath = path.join(srcPath, 'sw-ui.module.ts');
const publicApiPath = path.join(__dirname, 'projects', 'sw-ui', 'src', 'public-api.ts');

// Convert file name to PascalCase
const toPascalCase = (fileName) => {
  return fileName
    .replace(/\.component\.ts$/, '')          // Remove .component.ts
    .replace(/[-_]/g, ' ')                    // Replace dashes and underscores with spaces
    .split(' ')                               // Split into words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join('');                                // Join back into a single string
};

// Get all component files from the specified directory
const getComponents = (dir, basePath) => {
  let components = [];

  const filesAndDirs = fs.readdirSync(dir, { withFileTypes: true });

  filesAndDirs.forEach(fileOrDir => {
    const fullPath = path.join(dir, fileOrDir.name);
    if (fileOrDir.isDirectory()) {
      components = components.concat(getComponents(fullPath, basePath));
    } else if (fileOrDir.isFile() && fileOrDir.name.endsWith('.component.ts')) {
      const relativePath = path.relative(basePath, fullPath);
      const componentName = toPascalCase(fileOrDir.name);
      components.push({
        name: `${componentName}Component`,
        path: `./lib/${relativePath.replace(/\.ts$/, '').replace(/\\/g, '/')}`
      });
    }
  });

  return components;
};

// Update the Angular module file
const updateModuleFile = (components) => {
  try {
    let moduleContent = fs.readFileSync(modulePath, 'utf8');

    const declarationPattern = /declarations:\s*\[(.*?)\]/s;
    const exportPattern = /exports:\s*\[(.*?)\]/s;

    const updatedDeclarations = components.map(comp => comp.name).join(',\n  ');
    const updatedExports = components.map(comp => comp.name).join(',\n  ');

    let updatedContent = moduleContent;

    if (declarationPattern.test(moduleContent)) {
      updatedContent = updatedContent.replace(declarationPattern, (match, p1) => {
        const currentDeclarations = p1.split(/\s*,\s*/).filter(Boolean);
        const newDeclarations = [...new Set([...currentDeclarations, ...components.map(comp => comp.name)])];
        return `declarations: [\n  ${newDeclarations.join(',\n  ')}\n]`;
      });
    } else {
      updatedContent = updatedContent.replace(/(@NgModule\s*\(\{)/, `$1\n  declarations: [\n  ${updatedDeclarations}\n],`);
    }

    if (exportPattern.test(moduleContent)) {
      updatedContent = updatedContent.replace(exportPattern, (match, p1) => {
        const currentExports = p1.split(/\s*,\s*/).filter(Boolean);
        const newExports = [...new Set([...currentExports, ...components.map(comp => comp.name)])];
        return `exports: [\n  ${newExports.join(',\n  ')}\n]`;
      });
    } else {
      updatedContent = updatedContent.replace(/(@NgModule\s*\(\{)/, `$1\n  exports: [\n  ${updatedExports}\n],`);
    }

    fs.writeFileSync(modulePath, updatedContent, 'utf8');
    console.log(`Updated module file: ${modulePath}`);
  } catch (error) {
    console.error(`Error updating module file: ${error.message}`);
  }
};

// Update the public API file
const updatePublicApiFile = (components) => {
  try {
    let publicApiContent = fs.readFileSync(publicApiPath, 'utf8');

    const newExports = components.map(comp => `export * from '${comp.path}';`).join('\n');

    publicApiContent = publicApiContent.split('\n').filter(line => !line.startsWith('export * from')).join('\n');

    publicApiContent += `\n${newExports}`;

    fs.writeFileSync(publicApiPath, publicApiContent, 'utf8');
    console.log(`Updated public-api file: ${publicApiPath}`);
  } catch (error) {
    console.error(`Error updating public-api file: ${error.message}`);
  }
};

// Execute script
const components = getComponents(srcPath, srcPath);
updateModuleFile(components);
updatePublicApiFile(components);
