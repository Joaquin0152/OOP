const inquirer = require('inquire')
const manager = require('./data/manager')
const intern = require('./data/intern')
const engineer = require('./data/engineer')
const fs = require('fs');
const {
    writeFile
} = require('node:fs');
const myteam = require('./public')

myTeam[];
const promptUser = () => {
return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is your ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'list',
            name: 'role',
            message: 'What is your profession?',
            choices: ['Employee', 'Manager', 'Engineer', 'Intern']
        },
    ])
    .then((managerQues) => {
        const manager = bossMan(manager.id, manager.name, manager.email, manager.officeNumber)
        team.push(manger)
        switch (manager.addMember) {
            case 'Engineer':
                engineerQues() {
                    break;
                    default:
                    writeFile('public/team.html', generateTeam(team))
                }
    });

{
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub Username',
}, {
    type: 'input',
    name: 'email',
    message: 'What is your email address',
},
]);