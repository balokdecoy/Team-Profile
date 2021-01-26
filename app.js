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

render = require("./lib/htmlRenderer");


const teamArray = [];
  
const buildManager = () => {
    console.log("First you will need to create a manager for your team.");
    inquirer.prompt([
        {
            type: "input",
            name: "manName",
            message: "Enter manager name",
            validate: data => {
                if (data !== "") {
                    return true;
                }
                else {
                    return "Please enter a valid manager name";
                }
            }
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
        const manager = new Manager(data.manName, data.manID, data.manEmail, data.officeNumber);
        teamArray.push(manager);
        addEmployee();
    });
};

const addEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "employeeType",
            message: "Would you like to add an employee?",
            choices: [
                "Engineer",
                "Intern",
                "Exit to generate team",
            ],
        }
    ]).then((data) => {
     if (data.employeeType === "Engineer") {
           buildEngineer();
       }
       else if (data.employeeType === "Intern") {
           buildIntern();
       }
       else if (data.employeeType === "Exit to generate team") {
           console.log(teamArray);
           writeFile();
       }
        
    })
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
    addEmployee();
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
    addEmployee();
};

const writeFile = () => {
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
    console.log('hello');
}

buildManager();

//module.exports = app