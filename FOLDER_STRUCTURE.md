# Node.js Assessment - Organized Folder Structure

## Overview
All assessment files have been organized into separate folders based on each part of the assessment.

## Folder Structure

```
node-assessment/
├── part1-setup/                    # Part 1: Environment Setup & Basic Node.js
│   ├── index.js                   # Main entry point
│   └── welcome.js                 # Welcome program with Node.js info
│
├── part2-core-modules/            # Part 2: Core Modules & File System
│   ├── fileManager.js            # File system operations
│   ├── pathUtils.js              # Path module utilities
│   ├── activity.log              # Generated log file
│   └── data/                     # Data directory
│
├── part3-custom-modules/          # Part 3: Custom Modules & Module Systems
│   ├── calculator.js             # Calculator module (CommonJS)
│   ├── mathUtils.js              # Math utilities (CommonJS)
│   ├── main.js                   # CommonJS demonstration
│   ├── user.mjs                  # User module (ES Module)
│   ├── validator.mjs             # Validator module (ES Module)
│   └── app.mjs                   # ES Module demonstration
│
├── part4-npm-packages/            # Part 4: NPM & Package Management
│   ├── config.js                 # Environment configuration
│   ├── styledOutput.js           # Chalk package demonstration
│   ├── DEPENDENCIES.md           # Dependencies explanation
│   ├── .env                      # Environment variables (not in git)
│   └── .env.example              # Environment variables template
│
├── part5-async-concepts/          # Part 5: Event Loop & Async Concepts
│   ├── eventLoopDemo.js          # Event loop demonstration
│   ├── asyncFileHandler.js       # Async operations demo
│   ├── EVENT_LOOP_EXPLANATION.md # Event loop explanation
│   ├── input.txt                 # Test input file
│   ├── input-processed.txt       # Callback result
│   ├── input-processed-promise.txt  # Promise result
│   └── input-processed-async.txt    # Async/await result
│
├── node_modules/                  # NPM packages
├── package.json                   # Project configuration
├── package-lock.json              # Dependency lock file
├── .gitignore                     # Git ignore rules
├── README.md                      # Main documentation
└── FOLDER_STRUCTURE.md            # This file
```

## Running Individual Parts

You can now run each part of the assessment separately using npm scripts:

### Part 1: Environment Setup
```bash
npm run part1
```

### Part 2: Core Modules
```bash
npm run part2
```

### Part 3: Custom Modules
CommonJS version:
```bash
npm run part3:commonjs
```

ES Modules version:
```bash
npm run part3:esm
```

### Part 4: NPM & Packages
```bash
npm run part4
```

### Part 5: Event Loop & Async
Event Loop Demo:
```bash
npm run part5:eventloop
```

Async File Handler:
```bash
npm run part5:async
```

## Standard Scripts
```bash
npm start      # Runs the main index.js
npm run dev    # Runs with nodemon for development
npm test       # Shows test message
```

## Benefits of This Organization

1. **Clear Separation**: Each part of the assessment is in its own folder
2. **Easy Navigation**: Find files related to specific tasks quickly
3. **Independent Testing**: Run and test each part separately
4. **Better Understanding**: The structure mirrors the assessment organization
5. **Scalability**: Easy to add more files to specific parts without cluttering

## Notes

- All paths in package.json scripts have been updated to reflect the new structure
- Import/require statements in files may need to be updated if they reference other files
- The main entry point is still accessible via `npm start`
