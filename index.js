const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')



function init() {
    inquirer.prompt([
        {
            type: "input",
            message: 'What is the team manager\'s name?',
            name: "managerName"
        },
        {
            type: "input",
            message: 'What is the team manager\'s employee ID?',
            name: "managerID"
        },
        {
            type: "input",
            message: 'What is the team manager\'s email address?',
            name: "managerEmail"
        },
        {
            type: "input",
            message: 'What is the team manager\'s office number?',
            name: "managerOffice"
        }
    ])
    .then((answers) => {
        optionMenu()
    })
    .catch((err) => {
        console.log(err)
    })
}

function optionMenu() {
    let choice
    inquirer.prompt([
        {
            type: 'checkbox',
            message: "Do you wan to add an engineer, intern, or finish building your team?",
            choices: ["Engineer", "Intern", "Finish building my team"],
            name: "addPerson"
        },
    ]).then((option) => {
        //console.log(answers)
        // console.log(option.addPerson[0])
        choice = option.addPerson[0]
        if(choice == 'Engineer') {
            engineerPrompt()
            
        }
        else if(choice == 'Intern') {
            internPrompt()
            
        }
        else{
            console.log("Done")
        }
    })   
}

function engineerPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: 'What is the engineer\'s name?',
            name: "engineerName"
        },
        {
            type: "input",
            message: 'What is the engineer\'s employee ID?',
            name: "engineerID"
        },
        {
            type: "input",
            message: 'What is the engineer\'s email address?',
            name: "engineerEmail"
        },
        {
            type: "input",
            message: 'What is the engineer\'s Github username?',
            name: "engineerGithub"
        }
    ]).then(() => {
        optionMenu()
    })
}

function internPrompt() {
    inquirer.prompt([
        {
            type: "input",
            message: 'What is the intern\'s name?',
            name: "internName"
        },
        {
            type: "input",
            message: 'What is the intern\'s employee ID?',
            name: "internID"
        },
        {
            type: "input",
            message: 'What is the intern\'s email address?',
            name: "internEmail"
        },
        {
            type: "input",
            message: 'What is the intern\'s school?',
            name: "internSchool"
        }
    ]).then(() => {
        optionMenu()
    })
}

init()