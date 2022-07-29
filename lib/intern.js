const Employee = require('../lib/Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }

}

// if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
//     throw new Error("You need to provide an office number for managers");
// }
module.exports = Intern