// Require dependencies
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
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
            name: "manName",
            message: "Enter manager name",
        },

        {
            type: "input",
            name: "manID",
            message: "Enter manager ID number",
        },
       
        {
            type: "input",
            name: "manEmail",
            message: "Enter manager email",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number",
        },
    ]).then((data) => {
        teamArray.push(new Manager(data.manName, data.manID, data.manEmail, data.officeNumber));
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
            name: "githubProfile",
            message: "Enter Github profile name",
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
            message: "Enter school name",
        },
    ])
};

//module.exports = index