const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')
const Manager = require('../lib/manager')
const fs = require('fs');

const generateHTML = (userInput) => {
    // Create a string variable to use in writeFile
    var employeeCards = '';

    // For loop to cycle through all team members added
    for(i = 0; i < userInput.length; i++){
        //Create a string variable to add to employeeCards
        var singleEmpCard;
        
        //Switch statement to generate different HTML markup based on employee roles
        switch (userInput[i].getRole()) {
            case 'Manager':
                singleEmpCard = 
                `<div class="card col-3 mx-5 px-3 bg-primary">
                    <h5 class="card-title text-center text-white">
                        ${userInput[i].getName()}</br>
                        Role: Manager
                    </h5>
                    <div class="card-body bg-white text-black">                       
                        <ul class="list-group">
                            <li>ID: ${userInput[i].getId()}</li>
                            <li>Email: <a href="mailto:${userInput[i].getEmail()}">${userInput[i].getEmail()}</a></li>
                            <li>Office #: ${userInput[i].getOfficeNum()}</li>
                        </ul>
                    </div>
                </div>
                `
                employeeCards += singleEmpCard;
                break;
            case 'Engineer':
                singleEmpCard = 
                `<div class="card col-3 mx-5 px-3 bg-primary">
                    <h5 class="card-title text-center  text-white">
                        ${userInput[i].getName()}</br>
                        Role: Engineer
                    </h5>
                    <div class="card-body bg-white text-black">                       
                        <ul class="list-group">
                            <li>ID: ${userInput[i].getId()}</li>
                            <li>Email: <a href="mailto:${userInput[i].getEmail()}">${userInput[i].getEmail()}</a></li>
                            <li>Github: <a href="https://github.com/${userInput[i].getGithub()}">${userInput[i].getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
                `
                employeeCards += singleEmpCard;
                break;
            case 'Intern':
                singleEmpCard = 
                `<div class="card col-3 mx-5 px-3 bg-primary">
                    <h5 class="card-title text-center text-white">
                        ${userInput[i].getName()}</br>
                        Role: Intern
                    </h5>
                    <div class="card-body bg-white text-black">                       
                        <ul class="list-group">
                            <li>ID: ${userInput[i].getId()}</li>
                            <li>Email: <a href="mailto:${userInput[i].getEmail()}">${userInput[i].getEmail()}</a></li>
                            <li>School: ${userInput[i].getSchool()}</li>
                        </ul>
                    </div>
                </div>
                `
                employeeCards += singleEmpCard;
                break;
        }
    }
    // Takes Previous loop and hard codes an HTML file
    fs.writeFile(
        "./dist/index.html",
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <title>Team Information</title>
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid bg-primary">
                <h1 class="text-center text-light">My Team</h1>
            </div>
            <div class="d-flex p-2">
                ${employeeCards}
            </div>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
            <script src="../src/generateHTML.js"></script>
        </body>
        </html>`,
        (err) => err ? console.errror(err) : console.log('File created successsfully!')
    )
    
    
}

module.exports = generateHTML;