class Employee{
    constructor(name,id,email){
    this.name = name
    this.id = id
    this.email = email
    }
}

const Adam = new Employee('Adam', '001', 'adam@me.com')

if (typeof name !== "string" || !name.trim().length) {
    throw new Error("Expected parameter 'name' to be a non-empty string");
}

module.exports = Employee