#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const { execSync } = require('child_process');

const appName = process.argv[2];

if (!appName) {
    console.error("You must provide an application name.");
    process.exit(1);
}

const appPath = path.join(process.cwd(), appName);
const sourceDir = path.join(__dirname, '../');

if (fs.existsSync(appPath)) {
    console.error(`A directory named ${appName} already exists! Choose a different name or delete the existing one.`);
    process.exit(1);
}

console.log(`Creating a new project in ${appPath}...`);
fs.copySync(sourceDir, appPath);

console.log('Installing dependencies...');
execSync(`cd ${appPath} && npm install`, { stdio: 'inherit' });

console.log('Project setup complete!');
