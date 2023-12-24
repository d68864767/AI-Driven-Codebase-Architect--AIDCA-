```javascript
// Importing required modules
const fs = require('fs');
const path = require('path');

class DocumentationGenerator {
    constructor(fileManager) {
        this.fileManager = fileManager;
    }

    // Method to generate documentation for the directory structure
    generateDocumentation() {
        // Get the current directory structure
        const structure = this.fileManager.getStructure();

        // Convert the structure to a string representation
        const documentation = this.structureToString(structure);

        // Write the documentation to a file
        fs.writeFileSync(path.join(this.fileManager.rootDirectory, 'DIRECTORY_STRUCTURE.md'), documentation);

        console.log('Documentation generated');
    }

    // Method to convert a directory structure to a string representation
    structureToString(structure, depth = 0) {
        let documentation = '';

        structure.forEach(directory => {
            // Add the directory name to the documentation
            documentation += `${'  '.repeat(depth)}- ${directory.name}\n`;

            // Recursively add subdirectories
            if (directory.subdirectories) {
                documentation += this.structureToString(directory.subdirectories, depth + 1);
            }
        });

        return documentation;
    }
}

module.exports = {
    DocumentationGenerator
};
```
