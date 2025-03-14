/**
 * Migration script to help copy files from the PolisPlan web app to the Polis mobile app
 * 
 * Usage:
 * node migrate.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const WEB_APP_PATH = '../palmela'; // Path to the web app
const MOBILE_APP_PATH = '.'; // Path to the mobile app

// Directories to copy
const DATA_FILES = [
  'src/data/projects.json',
  'src/data/municipio.json',
  'src/data/chapters.json',
  'src/data/funding.json',
];

// Function to ensure directory exists
function ensureDirectoryExists(dirPath) {
  const dirname = path.dirname(dirPath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExists(dirname);
  fs.mkdirSync(dirname);
}

// Function to copy a file
function copyFile(source, destination) {
  ensureDirectoryExists(destination);
  fs.copyFileSync(source, destination);
  console.log(`Copied: ${source} -> ${destination}`);
}

// Copy data files
console.log('Copying data files...');
DATA_FILES.forEach(file => {
  const sourcePath = path.join(WEB_APP_PATH, file);
  const destPath = path.join(MOBILE_APP_PATH, file);
  
  if (fs.existsSync(sourcePath)) {
    copyFile(sourcePath, destPath);
  } else {
    console.log(`Warning: Source file not found: ${sourcePath}`);
  }
});

console.log('\nMigration completed!');
console.log('\nNext steps:');
console.log('1. Copy images from the web app to the assets/images directory');
console.log('2. Update image references in components to use require() syntax');
console.log('3. Install dependencies with npm install');
console.log('4. Start the development server with npm start'); 