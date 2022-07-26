const inquirer = require("inquirer");
const fs = require('fs')

inquirer
.prompt([
    {
        type: 'input',
        name: 'managerName',
        message: `What is the manager's name?`,
    },
    {
        type: 'input',
        name: 'managersID',
        message:`What is the manager's employee ID?`,
    },
    {
        type: 'input',
        name: 'managersEmail',
        message: `What is the manager's email?`,
    },
    {
        type: 'input',
        name: 'managersOffice',
        message: "What is the manager's office number",
    },
    {
        type: 'list',
        name: 'newEmployee',
        message: "Would you like to add another employee",
        choices: ['Engineer', 'Intern', 'No thanks'],
    },
])