const fs = require('fs');
const path = require('path');

const srcPath = path.join(__dirname, 'src', 'lib');
const modulePath = path.join(srcPath, 'module.ts');
const publicApiPath = path.join(__dirname, 'src', 'public-api.ts');

const getComponents = () => {
  return fs.readdirSync(srcPath)
    .filter(file => fs.statSync(path.join(srcPath, file)).isDirectory())
    .filter(dir => fs.existsSync(path.join(srcPath, dir, `${dir}.component.ts`)))
    .map(dir => ({
      name: dir.charAt(0).toUpperCase() + dir.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) + 'Component',
      path: `./lib/${dir}`
    }));
};

const updateModuleFile = (components) => {
  let moduleContent = fs.readFileSync(modulePath, 'utf8');
  const declarationSection = moduleContent.match(/declarations: \[(.*?)\]/s);
  const exportSection = moduleContent.match(/exports: \[(.*?)\]/s);

  const updatedDeclarations = components.map(comp => comp.name).join(',\n  ');
  const updatedExports = components.map(comp => comp.name).join(',\n  ');

  moduleContent = moduleContent.replace(declarationSection[1], `\n  ${updatedDeclarations}\n`);
  moduleContent = moduleContent.replace(exportSection[1], `\n  ${updatedExports}\n`);

  fs.writeFileSync(modulePath, moduleContent, 'utf8');
};

const updatePublicApiFile = (components) => {
  let publicApiContent = fs.readFileSync(publicApiPath, 'utf8');
  const newExports = components.map(comp => `export * from '${comp.path}';`).join('\n');
  publicApiContent = publicApiContent.split('\n').filter(line => !line.startsWith('export * from')).join('\n');
  publicApiContent += `\n${newExports}`;
  fs.writeFileSync(publicApiPath, publicApiContent, 'utf8');
};

const components = getComponents();
updateModuleFile(components);
updatePublicApiFile(components);
