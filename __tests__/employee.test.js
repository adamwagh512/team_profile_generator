const Employee = require('../lib/Employee')
const employee = new Employee('Adam', '001', 'adam@me.com')

// * `name`
describe('employee.name', () => {
    it("should display the employee's name", () => {
            expect(employee.name).toEqual('Adam')
    })
})
// * `id`
describe('employee.id', () => {
    it("should display the employee's id", () => {
        expect(employee.id).toEqual('001')
    })
})
// * `email`
describe('employee.email', () => {
    it("should display the employee's email", () => {
        expect(employee.email).toEqual('adam@me.com')
    })
})

// * `getName()`
describe('getName()', () => {
    it('should retrieve the name using the getName method', () => {
        expect(employee.getName()).toEqual('Adam')
    })
})
// * `getId()`
describe('getId()', () => {
    it('should retrieve the id using the getId method', () => {
        expect(employee.getId()).toEqual('001')
    })
})
// * `getEmail()`
describe('getEmail()', () => {
    it('should retrieve the email using the getEmail method', () => {
        expect(employee.getEmail()).toEqual('adam@me.com')
    })
})
// * `getRole()`&mdash;returns `'Employee'`
describe('getRole()', () => {
    it('should retrieve the role of Employee using the getRole method', () => {
        expect(employee.getRole()).toEqual('Employee')
    })
})
// test('This is a properties test',() =>{
//     const name = 'adam'
//     const id = '001'
//     const email = 'adam@me.com'
//     const employee = new Employee(name, id, email)
//     expect(employee.name).toBe('adam')
//     expect(employee.id).toBe('001')
//     expect(employee.email).toBe('adam@me.com')
// })