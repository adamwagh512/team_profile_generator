const Employee = require('../lib/Employee')

class Engineer extends Employee {
    constructor (name, id, email, GithubUsername) {
        super(name, id, email);
        this.GithubUsername = GithubUsername
    }
    getGithubUsername() {
        return this.GithubUsername
    }
    getRole() {
        return 'Engineer'
    }
}

// if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
//     throw new Error("You need to provide an office number for managers");
// }
module.exports = Engineer