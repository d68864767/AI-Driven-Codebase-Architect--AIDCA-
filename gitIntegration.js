// Importing required modules
const { exec } = require('child_process');

class GitIntegration {
    constructor(fileManager) {
        this.fileManager = fileManager;
    }

    // Method to initialize a Git repository
    initializeRepository(directory) {
        exec(`git init ${directory}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error initializing Git repository: ${error}`);
                return;
            }
            console.log(`Git repository initialized: ${stdout}`);
        });
    }

    // Method to add files to the Git repository
    addFiles(files) {
        files.forEach(file => {
            exec(`git add ${file}`, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error adding file to Git repository: ${error}`);
                    return;
                }
                console.log(`File added to Git repository: ${stdout}`);
            });
        });
    }

    // Method to commit changes to the Git repository
    commitChanges(message) {
        exec(`git commit -m "${message}"`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error committing changes to Git repository: ${error}`);
                return;
            }
            console.log(`Changes committed to Git repository: ${stdout}`);
        });
    }

    // Method to push changes to the remote Git repository
    pushChanges(branch = 'main') {
        exec(`git push origin ${branch}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error pushing changes to remote Git repository: ${error}`);
                return;
            }
            console.log(`Changes pushed to remote Git repository: ${stdout}`);
        });
    }

    // Method to pull changes from the remote Git repository
    pullChanges(branch = 'main') {
        exec(`git pull origin ${branch}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error pulling changes from remote Git repository: ${error}`);
                return;
            }
            console.log(`Changes pulled from remote Git repository: ${stdout}`);
        });
    }

    // Method to checkout a branch in the Git repository
    checkoutBranch(branch) {
        exec(`git checkout ${branch}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error checking out branch in Git repository: ${error}`);
                return;
            }
            console.log(`Checked out branch in Git repository: ${stdout}`);
        });
    }

    // Method to merge a branch in the Git repository
    mergeBranch(branch) {
        exec(`git merge ${branch}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error merging branch in Git repository: ${error}`);
                return;
            }
            console.log(`Merged branch in Git repository: ${stdout}`);
        });
    }
}

module.exports = {
    GitIntegration
};
