const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
//const html = require('./src/script')

let team = {
    manager: [],
    engineers: [],
    interns: []
}


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
    .then((response) => {
        console.log("manager name", response.managerName)
        let manager = new Manager(response.managerName, response.managerID, response.managerEmail, response.managerOffice)
        team.manager.push(manager)
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
            console.log("team", team)
            //genManager(team)
            // combineEngineers(team)
            // combineInterns(team)
            html(team)
            writeToFile("team.html")
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
    ]).then((response) => {
        let eng = new Engineer(response.engineerName, response.engineerID, response.engineerEmail, response.engineerGithub)
        team.engineers.push(eng)
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
    ]).then((response) => {
        let intern = new Intern(response.internName, response.internID, response.internEmail, response.internSchool)
        team.interns.push(intern)
        optionMenu()
    })
}

function writeToFile(filename, data) {
    fs.writeFile(filename, html(data), (err) => {
        console.log(err)
    })
}

function html(myTeam) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link> rel="stylesheet" href="src/styles.css"
        <title>My Team</title>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section id='manager'>
            ${genManager(team)}
        </section>
        <section id='engineer'>
            ${combineEngineers(team)}
        </section>
        <section id='intern'>
            ${combineInterns(team)}
        </section>
        <script src='script.js'></script>
    </body>
    </html>`
}

function genManager(myTeam) {
    if(myTeam.manager.length > 0) {
        return `
        <h2>${myTeam.manager[0].getName()}</h2>
        <h3>${myTeam.manager[0].getRole()}</h3>
        <p>ID: ${myTeam.manager[0].getId()}</p>
        <p>Email: ${myTeam.manager[0].getEmail()}</p>
        <p>Office Number: ${myTeam.manager[0].getOffice()}</p>`
    }
}

function genEngineer(engineer) {
    return `
        <section> 
            <h2>${engineer.getName()}</h2>
            <h3>${engineer.getRole()}</h3>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: ${engineer.getEmail()}</p>
            <p>Github: ${engineer.getGithub()}</p>
        </section>`
}

function genIntern(intern) {
    return `
        <section> 
            <h2>${intern.getName()}</h2>
            <h3>${intern.getRole()}</h3>
            <p>ID: ${intern.getId()}</p>
            <p>Email: ${intern.getEmail()}</p>
            <p>School: ${intern.getSchool()}</p>
        </section>`
}

function combineEngineers(myTeam) {
    let engineerString = ``
    for(let i =0; i < myTeam.engineers.length; i++) {
        engineerString += genEngineer(myTeam.engineers[i])
    }
    return engineerString
}

function combineInterns(myTeam) {
    let internString = ``
    for(let i =0; i < myTeam.interns.length; i++) {
        internString += genIntern(myTeam.interns[i])
    }
    return internString
}

init()
