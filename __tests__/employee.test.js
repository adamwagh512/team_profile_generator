const Employee = require('../lib/Employee')
// describe ('Employee', () => {
//     describe()
// })
// * `name`
    describe('employee.name', () => {
        it("should display the employee's name", () => {
            const employee = new Employee('Adam', '001', 'adam@me.com')
            expect(employee.name).toEqual('Adam')
        })
    })
        
// * `id`
describe('employee.id', () => {
    it("should display the employee's id", () => {
        const employee = new Employee('Adam', '001', 'adam@me.com')
        expect(employee.id).toEqual('001')
    })
})
// * `email`
describe('employee.email', () => {
    it("should display the employee's email", () => {
        const employee = new Employee('Adam', '001', 'adam@me.com')
        expect(employee.email).toEqual('adam@me.com')
    })
})

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// test('This is a properties test',() =>{
//     const name = 'adam'
//     const id = '001'
//     const email = 'adam@me.com'
//     const employee = new Employee(name, id, email)
//     expect(employee.name).toBe('adam')
//     expect(employee.id).toBe('001')
//     expect(employee.email).toBe('adam@me.com')
// })