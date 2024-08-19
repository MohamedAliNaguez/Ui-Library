const fs = require('fs');
const path = require('path');
const semver = require('semver');

// Paths to relevant files
const srcPath = path.join(__dirname, 'projects', 'sw-ui', 'src', 'lib');
const modulePath = path.join(srcPath, 'sw-ui.module.ts');
const publicApiPath = path.join(__dirname, 'projects', 'sw-ui', 'src', 'public-api.ts');
const packageJsonPath = path.join(__dirname, 'projects', 'sw-ui', 'package.json');

// Convert file name to PascalCase
const toPascalCase = (fileName) => {
  return fileName
    .replace(/\.component\.ts$/, '')
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
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

    const newDeclarations = components.map(comp => comp.name);
    const newExports = components.map(comp => comp.name);

    let updatedContent = moduleContent;

    // Update declarations
    if (declarationPattern.test(moduleContent)) {
      updatedContent = updatedContent.replace(declarationPattern, (match, p1) => {
        const currentDeclarations = p1.split(/\s*,\s*/).filter(Boolean);
        const updatedDeclarations = currentDeclarations.filter(declaration => newDeclarations.includes(declaration))
          .concat(newDeclarations);
        return `declarations: [\n  ${[...new Set(updatedDeclarations)].join(',\n  ')}\n]`;
      });
    } else {
      updatedContent = updatedContent.replace(/(@NgModule\s*\(\{)/, `$1\n  declarations: [\n  ${newDeclarations.join(',\n  ')}\n],`);
    }

    // Update exports
    if (exportPattern.test(moduleContent)) {
      updatedContent = updatedContent.replace(exportPattern, (match, p1) => {
        const currentExports = p1.split(/\s*,\s*/).filter(Boolean);
        const updatedExports = currentExports.filter(exp => newExports.includes(exp))
          .concat(newExports);
        return `exports: [\n  ${[...new Set(updatedExports)].join(',\n  ')}\n]`;
      });
    } else {
      updatedContent = updatedContent.replace(/(@NgModule\s*\(\{)/, `$1\n  exports: [\n  ${newExports.join(',\n  ')}\n],`);
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

    // Create a set to track existing exports to avoid duplicates
    const existingExports = new Set();

    // Capture all existing export lines
    publicApiContent.split('\n').forEach(line => {
      if (line.startsWith('export * from')) {
        existingExports.add(line.trim());
      }
    });

    // Ensure `export * from './lib/sw-ui.module';` is not removed
    existingExports.add("export * from './lib/sw-ui.module';");

    // Generate new export lines for components
    const newExportLines = components.map(comp => `export * from '${comp.path}';`);

    // Add only new exports that are not already present
    newExportLines.forEach(line => existingExports.add(line));

    // Create a set of existing paths for quick lookup
    const existingPaths = new Set(components.map(comp => comp.path));

    // Remove lines for paths that no longer exist
    publicApiContent = Array.from(existingExports).filter(line => {
      const pathMatch = line.match(/'([^']+)'/);
      return pathMatch && (pathMatch[1] === './lib/sw-ui.module' || existingPaths.has(pathMatch[1]));
    }).join('\n');

    // Write back to the public API file
    fs.writeFileSync(publicApiPath, publicApiContent, 'utf8');
    console.log(`Updated public-api file: ${publicApiPath}`);
  } catch (error) {
    console.error(`Error updating public-api file: ${error.message}`);
  }
};

// Update the package.json version
const updatePackageVersion = () => {
  try {
    let packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    let currentVersion = packageJson.version;
    
    let newVersion = semver.inc(currentVersion, 'patch'); // Increment the version
    packageJson.version = newVersion;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log(`Updated package version to: ${newVersion}`);
  } catch (error) {
    console.error(`Error updating package version: ${error.message}`);
  }
};

// Execute script
const components = getComponents(srcPath, srcPath);
updateModuleFile(components);
updatePublicApiFile(components);
updatePackageVersion();
