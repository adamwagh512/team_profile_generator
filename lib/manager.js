const Employee = require("./Employee");
// import Employee from "./Employee";
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber
    }
    getOfficeNumber() {
        return this.officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

// if (typeof officeNumber !== "string" || !officeNumber.trim().length) {
//     throw new Error("You need to provide an office number for managers");
// }
module.exports = Manager;