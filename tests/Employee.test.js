const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object with name, id, and email properties", () => {
            const obj = new Employee("Bob", 1, "bob@bob.com")
            expect('name' in obj && 'id' in obj && 'email' in obj).toEqual(true)
        })
    })
    describe("getName", () => {
        it("should retunr the name of the empployee", () => {
            const name = "Bob"
            const result = new Employee("Bob", 1, "bob@bob.com").getName()
            expect(result).toEqual(name)
        })
    })
    describe("getId", () => {
        it("should return the id of the empployee", () => {
            const id = 1
            const result = new Employee("Bob", 1, "bob@bob.com").getId()
            expect(result).toEqual(id)
        })
    })
    describe("getEmail", () => {
        it("should retunr the email of the empployee", () => {
            const email = "bob@bob.com"
            const result = new Employee("Bob", 1, "bob@bob.com").getEmail()
            expect(result).toEqual(email)
        })
    })
})