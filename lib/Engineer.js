const Employee = require('./Employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getName() {

    }

    getId() {

    }

    getEmail() {

    }

    getGithub() {

    }
}

module.exports = Engineer;