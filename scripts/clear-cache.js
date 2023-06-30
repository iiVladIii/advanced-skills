const path = require('path');
const fs = require('fs');

const nodeModulesPath = path.resolve(__dirname, '..', 'node_modules', '.cache');
fs.rmSync(nodeModulesPath, { recursive: true, force: true });
