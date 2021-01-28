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
            validate: data => {
                const check = isNaN(data);
                if (check) {
                    return "Please enter a valid ID number";
                }
                else {
                    return true;
                }
            }
        },
       
        {
            type: "input",
            name: "manEmail",
            message: "Enter manager email",
            validate: data => {
                const check = data.match(
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                );
                if (check) {
                    return true;
                }
                else {
                    return "Please enter a valid email address"
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter manager's office number",
            validate: data => {
                const check = isNaN(data);
                if (check) {
                    return "Please enter a valid office number";
                }
                else {
                    return true;
                }
            }
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
            name: "engName",
            message: "Enter engineer name",
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
            name: "engID",
            message: "Enter engineer ID number",
            validate: data => {
                const check = isNaN(data);
                if (check) {
                    return "Please enter a valid ID number";
                }
                else {
                    return true;
                }
            }
        },
       
        {
            type: "input",
            name: "engEmail",
            message: "Enter engineer email",
            validate: data => {
                const check = data.match(
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                );
                if (check) {
                    return true;
                }
                else {
                    return "Please enter a valid email address"
                }
            }
        },
        {
            type: "input",
            name: "githubProfile",
            message: "Enter Github profile name",
            validate: data => {
                if (data !== "") {
                    return true;
                }
                else {
                    return "Please enter a valid github profile name";
                }
            }
        },
    ]).then((data) => {
        const engineer = new Engineer(data.engName, data.engID, data.engEmail, data.githubProfile);
        teamArray.push(engineer);
        addEmployee();
    });
};

const buildIntern = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "intName",
            message: "Enter intern name",
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
            name: "intID",
            message: "Enter intern ID number",
            validate: data => {
                const check = isNaN(data);
                if (check) {
                    return "Please enter a valid ID number";
                }
                else {
                    return true;
                }
            }
        },
       
        {
            type: "input",
            name: "intEmail",
            message: "Enter intern email",
            validate: data => {
                const check = data.match(
                    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                );
                if (check) {
                    return true;
                }
                else {
                    return "Please enter a valid email address"
                }
            }
        },
        {
            type: "input",
            name: "intSchool",
            message: "Enter school name",
            validate: data => {
                if (data !== "") {
                    return true;
                }
                else {
                    return "Please enter a valid school name";
                }
            }
        },
    ]).then((data) => {
        const intern = new Intern(data.intName, data.intID, data.intEmail, data.intSchool);
        teamArray.push(intern);
        addEmployee();
    });
};

const writeFile = () => {
    fs.writeFileSync(outputPath, render(teamArray), "utf-8");
    console.log('Program complete. Check the output folder for your custom Team Profile page.');
};

buildManager();