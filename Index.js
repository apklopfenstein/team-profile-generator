const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const render = require('./lib/render.js');
const fs = require('fs');

// Employee choice list
const employeeChoices = [{
    type: 'list',
    name: 'employeeChoice',
    message: 'What employee would you like to generate a profile for?',
    choices: ['Manager', 'Engineer', 'Intern', 'Finish']
}]

// Manager question set
const managerQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is the manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your manager's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter an office number.');
                return false;
            }
        }
    }
]

// Engineer question set
const engineerQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the engineer's employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Please enter a GitHub username.');
                return false;
            }
        }
    }
]

// Intern question set
const internQuestions = [{
        type: 'input',
        name: 'name',
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter a name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the intern's employee ID?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your intern's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an email address.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'What school did the intern attend?',
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter a school.');
                return false;
            }
        }
    }
]

// List of employees
const employeeList = [];

// Pick employee type from list and run corresponding question set
const pickEmployee = () => {
    inquirer.prompt(employeeChoices)
        .then(answers => {
            const { employeeChoice } = answers;

            if (employeeChoice === 'Manager') {
                promptManager();
            } else if (employeeChoice === 'Engineer') {
                promptEngineer();
            } else if (employeeChoice === 'Intern') {
                promptIntern();
            } else if (employeeChoice === 'Finish') {
                finish();
            }
        })
};

// Add manager input to the employee list
const promptManager = () => {
    inquirer.prompt(managerQuestions)
        .then(answers => {
            const manager = new Manager (answers.name, answers.id, answers.email, answers.officeNumber);
            employeeList.push(manager);

            pickEmployee();
        });
}

// Add engineer input to employee list
const promptEngineer = () => {
    inquirer.prompt(engineerQuestions)
        .then(answers => {
            const engineer = new Engineer (answers.name, answers.id, answers.email, answers.github);
            employeeList.push(engineer);

            pickEmployee();
        });
}

// Add intern input to employee list
const promptIntern = () => {
    inquirer.prompt(internQuestions)
        .then(answers => {
            const intern = new Intern (answers.name, answers.id, answers.email, answers.school);
            employeeList.push(intern);

            pickEmployee();
        });
}

const finish = () => {
    const generatedHtml = render(employeeList);

    fs.writeFile('./dist/index.html', generatedHtml, err => {
        if (err) throw err;

        console.log('HTML has been generated in the dist folder!');
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) throw err;
    });
};

pickEmployee();