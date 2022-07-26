const Employee = require('../lib/Employee')
// * `name`
    describe('employee.name', () => {
        it("should display the employee's name", () => {
            const name = 'adam'
            expect(Employee.name).toBe('Adam')
        })
    })
        
// * `id`

// * `email`

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