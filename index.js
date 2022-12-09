const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const generateHTML = require('./src/templateHTML.js')
const teamMembers = [];

const managerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'officenumber',
      message: 'What is your office number?',
    },
  ]).then(userResponse => {
    const manager = new Manager(userResponse.name, userResponse.id, userResponse.email, userResponse.officenumber);
    teamMembers.push(manager);
    questionsLoop();
  })
};

const engineerQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
  ]).then(userResponse => {
    const engineer = new Engineer(userResponse.name, userResponse.id, userResponse.email, userResponse.github);
    teamMembers.push(engineer);
    questionsLoop();
  }
  )
};

const internQuestions = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your Employee ID?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What is your school name?',
    },
  ]).then(userResponse => {
    const intern = new Intern(userResponse.name, userResponse.id, userResponse.email, userResponse.school)
    teamMembers.push(intern);
    questionsLoop();
  }
  )
};

const questionsLoop = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: 'If you would like to create a new team member, please choose from the following options:',
      choices: ['New engineer', 'New intern', 'Finished']
    }
  ]).then(managerChoice => {
    switch (managerChoice.choice) {
      case 'New engineer':
        engineerQuestions();
        break;
      case 'New intern':
        internQuestions();
        break;
      case 'Finished':
      // I need to build my team file
      console.table(teamMembers)
      buildTeamFile();
      return;
    }
  })
};


const buildTeamFile = () => {
  fs.writeFile('./dist/index.html', generateHTML(teamMembers), 'UTF-8', (err) => 
    err ? console.log(err) : console.log('You are finished!'))
  };

  managerQuestions();

