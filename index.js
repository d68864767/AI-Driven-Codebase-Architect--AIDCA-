// Importing required modules
const aiModel = require('./aiModel');
const fileManager = require('./fileManager');
const gitIntegration = require('./gitIntegration');
const collaborationIntegration = require('./collaborationIntegration');
const documentationGenerator = require('./documentationGenerator');
const userInterface = require('./userInterface');

// Main function to start the application
async function startApplication() {
    try {
        // Initialize AI model
        const model = await aiModel.initializeModel();

        // Initialize file manager with the AI model
        const manager = new fileManager.FileManager(model);

        // Initialize Git integration
        const git = new gitIntegration.GitIntegration(manager);

        // Initialize collaboration integration
        const collaboration = new collaborationIntegration.CollaborationIntegration(manager);

        // Initialize documentation generator
        const documentation = new documentationGenerator.DocumentationGenerator(manager);

        // Initialize user interface
        const ui = new userInterface.UserInterface(manager, git, collaboration, documentation);

        // Start the user interface
        ui.start();

    } catch (error) {
        console.error('Failed to start the application:', error);
    }
}

// Start the application
startApplication();
