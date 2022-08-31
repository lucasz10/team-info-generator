const Employee = require('../lib/employee')
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')
const Manager = require('../lib/manager')
const fs = require('fs');

const generateHTML = (userInput) => {
   
    fs.writeFile(
        "./dist/index.html",
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Information</title>
        </head>
        <body>
            <header></header>
            <div id="employees"></div>
        </body>
        </html>`,
        (err) => err ? console.errror(err) : console.log('File created successsfully!')
    )

    for(i = 0; i < dataInput.length; i++){
        
        switch (userInput.getRole()) {
            case 'Manager':

        }
         
    }
}

module.exports = generateHTML;