// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any, with links to their GitHub profiles.',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select license for your application.',
        choices: ['MIT', 'Apache', 'ISC', 'BSD', 'No license']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide a link to the application github repo.',
    },
    // {
    //     type: ,
    //     name: ,
    //     message: ,
    // },
    // {
    //     type: ,
    //     name: ,
    //     message: ,
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => writeToFile('GENERATEDREADME.md', generateMarkdown(data)))
        .then(() => console.log('README generated!'))
        .catch((err => console.log(err)))
        
}

// Function call to initialize app
init();

