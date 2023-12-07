// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'fileName',
    },
    {
      type: 'input',
      message: 'Enter description of project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'Enter installation instructions:',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Enter usage information:',
      name: 'usage',
    },
    {
      type: 'list',
      message: 'What kind of license would you like?',
      choices: ['Apache', 'MIT', 'Creative Commons', 'Perl', 'No license'],
      name: 'license'
    },
    {
      type: 'input',
      message: 'Enter contribution guidelines:',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Enter test instructions:',
      name: 'test',
    },
    {
      type: 'input',
      message: 'Enter Github:',
      name: 'github',
    },
    {
      type: 'input',
      message: 'Enter email:',
      name: 'email',
    },
  ];

// Create a function to write README file
inquirer.prompt(questions).then(answers => {
  const readme = generateMarkdown(answers);
  fs.writeFile('README.md', readme, function (err){
      console.log(err)
  })
})
  

function init() {}


init();
