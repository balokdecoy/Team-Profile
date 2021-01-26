// Require dependencies
const employee = require('./lib/Employee');
const engineer = require('./lib/Engineer');
const intern = require('./lib/Intern');
const manager = require('./lib/Manager');
const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


const teamArray = [];


const newEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Which employee would you like to add?",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Exit",
            ],
        }
    ]).then((data) => {
       if (data.employeeType === "Manager") {
           buildManager();
       }
       else if (data.employeeType === "Engineer") {
           buildEngineer();
       }
       else if (data.employeeType === "Intern") {
           buildIntern();
       }
       else if (data.employeeType === "Exit") {
           console.log(teamArray);
       }
        
    })
};

newEmployee();
  
const buildManager = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "managerName",
            message: "Enter manager name",
        },

        {
            type: "input",
            name: "managerID",
            message: "Enter manager ID number",
        },
       
        {
            type: "input",
            name: "managerEmail",
            message: "Enter manager email",
        },
        {
            type: "input",
            name: "managerPhone",
            message: "Enter manager's office number",
        },
    ]).then((data) => {
        console.log(data.managerName)
        newEmployee();
    });
};

const buildEngineer = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "Enter engineer name",
        },

        {
            type: "input",
            name: "engineerID",
            message: "Enter engineer ID number",
        },
       
        {
            type: "input",
            name: "engineerEmail",
            message: "Enter engineer email",
        },
        {
            type: "input",
            name: "engineerPhone",
            message: "Enter engineer's office number",
        },
    ])
};

const buildIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "Enter intern name",
        },

        {
            type: "input",
            name: "internID",
            message: "Enter intern ID number",
        },
       
        {
            type: "input",
            name: "internEmail",
            message: "Enter intern email",
        },
        {
            type: "input",
            name: "internPhone",
            message: "Enter intern's office number",
        },
    ])
};

//module.exports = index