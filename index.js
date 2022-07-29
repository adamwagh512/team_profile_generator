const fetch = require('node-fetch');
const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
// import {Manager} from "./lib/manager.js";
// import {Engineer} from "./lib/engineer.js";
// import {Intern} from "./lib/intern.js";
const teamRoster = [];

// -----------------------------------------------------------//
//This is a switch statement that will help build new employees if needed
//I know I need to wire these up to the output of new employee question at some point, just getting done what I can
function makeNewEmployee() {
  return inquirer.prompt([
  {
    type: "list",
    name: "newEmployee",
    message: "Would you like to add another employee?",
    choices: ["Engineer", "Intern", "No thanks"],
  }
]);
//probably need a .then statement to wait for the answer from the prompt above. 

const newEmployee = list.choices

switch(newEmployee) {
  case "Engineer":
    makeEngineer();
    break;

  case "Intern":
    makeIntern();
    break;
   
  case "No thanks":
    console.log('Thank you for using my team profile generator, the website in now available');
    break;

  default:
    return "There is a bug in the newEmployee funtion somewhere, please let me know about it on Github!"
};
};

// ----------------------------------------------------------//
//These are the functions for intern and enginner 

function makeEngineer() {
  inquirer.prompt([
    {
    type: "input",
    name: 'name',
    massage: "What is the engineer's name?",
    validate: name => {
      if (name) {
        return true;
      } else  {
        console.log('Employee name is required')
        return false
      }
    }
    },
    {
    type: 'input',
    name: 'email',
    massage: "What is the engineer's email?",
    validate: email => {
      if (email) {
        return true;
      } else  {
        console.log('Employee email is required')
        return false
      }
    }
    },
    {
    type: 'input',
    name: 'id',
    massage: "What is the engineer's id?",
    validate: id => {
      if (id) {
        return true;
      } else  {
        console.log('Employee ID is required')
        return false
      }
    }
    },
    {
    type: 'input',
    name: 'github',
    massage: "What is the engineer's Github username?",
    validate: github => {
      if (github) {
        return true;
      } else  {
        console.log('A Github Username is required to make an Engineer')
        return false
      }
    }
    },
  ]) 
  .then(answers => {
    console.log(answers);
    const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
    teamRoster.push(engineer);
    makeNewEmployee();
    
  })
  makeNewEmployee();
}

function makeIntern() {
  inquirer.prompt([
    {
    type: 'input',
    name: 'name',
    massage: "What is the intern's name?",
    validate: name => {
      if (name) {
        return true;
      } else  {
        console.log('Employee name is required')
        return false
      }
    }
    },
    {
    type: 'input',
    name: 'email',
    massage: "What is the intern's email",
    validate: email => {
      if (email) {
        return true;
      } else  {
        console.log('Employee email is required')
        return false
      }
    }
    },
    {
    type: 'input',
    name: 'id',
    massage: "What is the inten's Id",
    validate: id => {
      if (id) {
        return true;
      } else  {
        console.log('Employee ID is required')
        return false
      }
    }
    },
    {
    type: 'input',
    name: 'school',
    massage: "What school does the intern attend?",
    validate: school => {
      if (school) {
        return true;
      } else  {
        console.log('School is required to build an Intern')
        return false
      }
    }
    },
  ])
  .then(answers => {
    console.log(answers);
    const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
    teamRoster.push(intern);
    makeNewEmployee();
    
  })
  makeNewEmployee();
}

// --------------------------------------------------------------//
//This is the initial prompt when the program is loaded
function teamStart() {
inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: `What is the manager's name?`,
    validate: name => {
      if (name) {
        return true;
      } else  {
        console.log('Employee name is required')
        return false
      }
    }
  },
  {
    type: "input",
    name: "id",
    message: `What is the manager's employee ID?`,
    validate: id => {
      if (id) {
        return true;
      } else  {
        console.log('Employee ID is required')
        return false
      }
    }
  },
  {
    type: "input",
    name: "email",
    message: `What is the manager's email?`,
    validate: email => {
      if (email) {
        return true;
      } else  {
        console.log('Employee email is required')
        return false
      }
    }
  },
  {
    type: "input",
    name: "officeNum",
    message: "What is the manager's office number?",
    validate: officeNum => {
      if (officeNum) {
        return true;
      } else  {
        console.log('Manager office number is required')
        return false
      }
    }
  },
])
.then(answers => {
    console.log(answers);
    const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNum);
    teamRoster.push(manager);
    console.log(teamRoster)
    makeNewEmployee();
    
  })
};

teamStart();