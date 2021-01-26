// Require dependencies

const inquirer = require('inquirer');
const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const manager = require('./lib/manager');
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
    ])
    .then((response) => {
        let data = render(response);
        fs.writeFile("test.html", data, (err) =>
          err ? console.log(err) : console.log('Success!')
        );
      });
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
    ]);
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