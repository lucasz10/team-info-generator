const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
const Intern = require('./lib/intern.js');
const Engineer = require('./lib/engineer.js');
var teamMembers = [];

// Function to initialize program and start basis of 
function init() {
    inquirer
        .prompt(
            [{
                type: 'input',
                message: 'What is the name of the team manager?',
                name: 'manName'
            },
            {
                type: 'input',
                message: 'What is their Employee ID?',
                name: 'manID'
            },
            {
                type: 'input',
                message: 'What is their email address?',
                name: 'manEmail'
            },
            {
                type: 'input',
                message: 'What is the office number that they manage?',
                name: 'manOffice'
            }]
        )
        .then(function (data) {
            const manager = new Manager(data.manName, parseInt(data.manID, 10), data.manEmail, parseInt(data.manOffice, 10))
            teamMembers.push(manager)
            checkTeam();
        })  
}

// Create inquirer to ask if user wants to add additional employees. Terminate program if user selects no
function checkTeam() {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'Are there any additional employees?',
                choices: ['Yes', 'No'],
                name: 'memberConf'
            }
        )
        .then(function (data) {
            if(data.memberConf === 'Yes'){
                enterEmployee();
            } else {
                generateHTML(teamMembers);
            }
        })
}

// Verifies employee type before moving to next step
function enterEmployee() {
    inquirer
        .prompt(
            {
                type: 'list',
                message: 'What type of employee are you entering?',
                choices: ['Engineer', 'Intern'],
                name: 'empType'
            },

        )
        .then(function (data) {
            switch (data.empType) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
            }
        })
}

function addEngineer() {
    inquirer
        .prompt(
            [{
                type: 'input',
                message: 'What is the name of the employee?',
                name: 'empName'
            },
            {
                type: 'input',
                message: 'What is their ID number?',
                name: 'empID'
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'empEmail'
            },
            {
                type: 'input',
                message: 'What is their GitHub URL?',
                name: 'empGitHub'
            }]
        )
        .then(function (data) {
            const engineer = new Engineer(data.empName, parseInt(data.empID, 10), data.empEmail, data.empGitHub)
            teamMembers.push(engineer);
            checkTeam();
        })   
}

function addIntern() {
    inquirer
        .prompt(
            [{
                type: 'input',
                message: 'What is the name of the employee?',
                name: 'empName'
            },
            {
                type: 'input',
                message: 'What is their ID number?',
                name: 'empID'
            },
            {
                type: 'input',
                message: 'What is their email?',
                name: 'empEmail'
            },
            {
                type: 'input',
                message: 'What school do they attend?',
                name: 'empSchool'
            }]
        )
        .then(function (data) {
            const intern = new Intern(data.empName, parseInt(data.empID, 10), data.empEmail, data.empSchool)
            teamMembers.push(intern);
            checkTeam();
        })

}

init();