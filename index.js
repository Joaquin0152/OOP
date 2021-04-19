const inquirer = require('inquire')
const manager = require('./data/manager')
const intern = require('./data/intern')
const engineer = require('./data/engineer')
const fs = require('fs');
const myteam = require('./public')

myTeam[];
const bossMan = () => {
        return inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                },
                {
                    type: 'input',
                    name: 'id',
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
                {
                    type: 'list',
                    name: 'officeNumber',
                    message: 'What is your office number?',
                    choices: ['23', '7', '25', '330']
                },
            ])
            .then((managerQues) => {
                    const manager = bossMan(manager.id, manager.name, manager.email, manager.officeNumber)
                    team.push(manager)
                    switch (manager.addMember) {
                        case 'Engineer':
                            engineerQues() {
                                break;
                                default:
                                writeFile('public/team.html', generateTeam(team))
                            }
                    });
            }

        const internQuest = () => {
                return inquirer.prompt([{
                    type: 'input',
                    name: 'name',
                    message: 'What is your name?',
                }, {
                    type: 'input',
                    name: 'id',
                    message: 'What is your ID?',
                }, {
                    type: 'input',
                    name: 'email',
                    message: 'What is your email?',
                }, {
                    type: 'list',
                    name: 'role',
                    message: 'What is your profession?',
                    choices: ['Employee', 'Manager', 'Engineer', 'Intern']
                }, {
                    type: 'list',
                    name: 'school',
                    message: 'What college do you attend?',
                    choices: ['SMU', 'A&M', 'UTD', 'TWU']
                }, 
            ])
            .then((internQues) => {
                    const intern = bossMan(intern.id, intern.name, intern.email, intern.school)
                    team.push(intern)
                    switch (intern.addMember) {
                        case 'Engineer':
                            engineerQues() {
                                break;
                                default:
                                writeFile('public/team.html', generateTeam(team))
                            }
                    });
            }