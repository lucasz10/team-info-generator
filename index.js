const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Manager = require('./lib/manager.js');
var teamMembers = [];
// Function to initialize program and start basis of 
function init() {
    const initQuestions = [
        {
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
        }
    ]
    inquirer
        .prompt(initQuestions)
        .then(function (data) {
            const manager = new Manager(data.manName, data.manID, data.manEmail, data.manOffice)
            teamMembers.push(manager)
        })
    checkTeam();
}

//TODO: Create inquirer to ask if user wants to add additional employees. Terminate program if user selects no
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
                endProgram();
            }
        })
}

//TODO: Create inquirer to asking for input on new employee
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