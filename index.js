const fetch = require("node-fetch");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { writeHTML } = require("./src/script");
const teamRoster = [];
// ----------------------------------------------------------//
//These are the functions for generating new intern and enginner employees

function makeEngineer() {
  // Asks questions about the new engineer
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the engineer's name?",
        //validates that the answer was not left blank
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Employee name is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the engineer's email?",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Employee email is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the engineer's id?",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Employee ID is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "What is the engineer's Github username?",
        validate: (github) => {
          if (github) {
            return true;
          } else {
            console.log("A Github Username is required to make an Engineer");
            return false;
          }
        },
      },
    ])
    // Takes the answers above and generates a new engineer, it also pushes that engineer onto the team roster
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      teamRoster.push(engineer);
      console.log(teamRoster);
    })
    .then((answers) => {
      //prompts the user to create another employee
      makeNewEmployee();
    });
}

function makeIntern() {
  //gathers information about the new intern
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the intern's name?",
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Employee name is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the intern's email",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Employee email is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is the inten's Id",
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Employee ID is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What school does the intern attend?",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("School is required to build an Intern");
            return false;
          }
        },
      },
    ])
    //takes the info from above, generates a new enginner and pushes it onto the team roster
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      teamRoster.push(intern);
      console.log(teamRoster);
    })
    .then((answers) => {
      // promts the user to make a new employee if needed
      makeNewEmployee();
    });
}

// -----------------------------------------------------------//
//This is a switch statement that will help build new employees if needed

function makeNewEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "newEmployee",
        message: "Would you like to add another employee?",
        choices: ["Engineer", "Intern", "No thanks"],
      },
    ])
    .then((answers) => {
      const newEmployee = answers.newEmployee;

      switch (newEmployee) {
        case "Engineer":
          makeEngineer();
          break;

        case "Intern":
          makeIntern();
          break;

        case "No thanks":
          console.log(
            "Thank you for using my team profile generator, the website in now available"
          );
          writeHTML(teamRoster);
          break;

        default:
          return "There is a bug in the newEmployee funtion somewhere, please let me know about it on Github!";
      }
    });
}

// --------------------------------------------------------------//
//This is the initial prompt when the program is loaded
function teamStart() {
  // This line of questioning generates a manager
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: `What is the manager's name?`,
        validate: (name) => {
          if (name) {
            return true;
          } else {
            console.log("Employee name is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: `What is the manager's employee ID?`,
        validate: (id) => {
          if (id) {
            return true;
          } else {
            console.log("Employee ID is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: `What is the manager's email?`,
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Employee email is required");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNum",
        message: "What is the manager's office number?",
        validate: (officeNum) => {
          if (officeNum) {
            return true;
          } else {
            console.log("Manager office number is required");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.officeNum
      );
      teamRoster.push(manager);
      console.log(teamRoster);
      makeNewEmployee();
    });
}
// This function execute when the program starts
teamStart();
