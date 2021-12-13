const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object with name, id, and email, and officeNum properties", () => {
            const obj = new Manager("Bob", 1, "bob@bob.com", "1000")
            expect('name' in obj && 'id' in obj && 'email' in obj && 'officeNum' in obj).toEqual(true)
        })
    })
    describe("getOffice", () => {
        it("should retunr the office of the empployee", () => {
            const office = "1000"
            const result = new Manager("Bob", 1, "bob@bob.com", "1000").getOffice()
            expect(result).toEqual(office)
        })
    })
    describe("getId", () => {
        it("should return the id of the empployee", () => {
            const role = "Manager"
            const result = new Manager("Bob", 1, "bob@bob.com", "1000").getRole()
            expect(result).toEqual(role)
        })
    })
})