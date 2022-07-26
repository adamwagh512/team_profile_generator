class Employee{
    constructor(name,id,email){
    this.name = name
    this.id = id
    this.email = email
    }
}

const Adam = new Employee('Adam', '001', 'adam@me.com')

module.exports = Employee