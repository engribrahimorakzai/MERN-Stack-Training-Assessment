# Dependencies Documentation

## Semantic Versioning

**Semantic Versioning (SemVer)** is a versioning scheme for software that uses a three-part version number: **MAJOR.MINOR.PATCH** (e.g., 4.1.2)

- **MAJOR** version (4): Incremented when you make incompatible API changes (breaking changes)
- **MINOR** version (1): Incremented when you add functionality in a backward-compatible manner
- **PATCH** version (2): Incremented when you make backward-compatible bug fixes

Example: Version `4.1.2`
- Major: 4
- Minor: 1
- Patch: 2

## The Caret (^) Symbol in Version Numbers

The **caret (^)** symbol in package.json allows updates that do not change the leftmost non-zero digit in the version number.

**Examples:**

- `^4.1.2` - Allows versions from 4.1.2 up to (but not including) 5.0.0
  - ✓ Can update to: 4.1.3, 4.2.0, 4.9.9
  - ✗ Cannot update to: 5.0.0, 3.x.x

- `^0.2.3` - Allows versions from 0.2.3 up to (but not including) 0.3.0
  - ✓ Can update to: 0.2.4, 0.2.9
  - ✗ Cannot update to: 0.3.0, 1.0.0

**Why use ^?**
- Automatically receives bug fixes and new features
- Avoids breaking changes
- Keeps dependencies up-to-date with security patches

## Dependencies vs DevDependencies

### **Dependencies**
Packages required for the application to **run in production**.

```json
"dependencies": {
  "dotenv": "^17.2.3",
  "chalk": "^4.1.2"
}
```

**Characteristics:**
- Installed with `npm install <package>`
- Included when deploying to production
- Essential for application functionality
- Examples: express, dotenv, database drivers, utility libraries

### **DevDependencies**
Packages only needed during **development and testing**, not in production.

```json
"devDependencies": {
  "nodemon": "^3.1.11"
}
```

**Characteristics:**
- Installed with `npm install --save-dev <package>`
- NOT included in production builds
- Used for development workflow
- Examples: nodemon, testing frameworks, linters, build tools

### **Key Differences Table**

| Aspect | Dependencies | DevDependencies |
|--------|-------------|-----------------|
| **Purpose** | Production runtime | Development only |
| **Installation** | `npm install` (always) | `npm install` (dev mode) |
| **Production** | ✓ Included | ✗ Excluded |
| **Command** | `npm install <pkg>` | `npm install --save-dev <pkg>` |
| **Examples** | express, dotenv, chalk | nodemon, jest, eslint |

### **Production Installation**
When installing for production, use:
```bash
npm install --production
```
This installs only `dependencies`, not `devDependencies`, reducing the deployment size and improving security.

## Our Project Dependencies

### **Production Dependencies:**
1. **dotenv** (^17.2.3) - Loads environment variables from .env file
2. **chalk** (^4.1.2) - Terminal string styling (colors, bold, etc.)

### **Development Dependencies:**
1. **nodemon** (^3.1.11) - Automatically restarts Node.js application when file changes are detected
