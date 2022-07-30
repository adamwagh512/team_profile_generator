const Intern = require('../lib/intern')
const intern = new Intern ('Adam', '001', 'adam@me.com', 'UT Austin')

describe('intern.school', () => {
    it("should display the intern's school", () => {
            expect(intern.school).toEqual('UT Austin')
    })
})

describe('intern.getSchool()', () => {
    it('should return the Interns school using the getSchool() method', () => {
        expect(intern.getSchool()).toEqual('UT Austin')
    })
})

describe('intern.getRole()', () => {
    it('should return the role of Intern using the getRole() method', () => {
        expect(intern.getRole()).toEqual('Intern')
    })
})