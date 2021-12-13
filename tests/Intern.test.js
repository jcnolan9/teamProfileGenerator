const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object with name, id, and email and school properties", () => {
            const obj = new Intern("Bob", 1, "bob@bob.com", "UVA")
            expect('name' in obj && 'id' in obj && 'email' in obj && 'school' in obj).toEqual(true)
        })
    })
    describe("getGithub", () => {
        it("should retunr the github of the empployee", () => {
            const school = "UVA"
            const result = new Intern("Bob", 1, "bob@bob.com", "UVA").getSchool()
            expect(result).toEqual(school)
        })
    })
    describe("getRole", () => {
        it("should return the role of the empployee", () => {
            const role = "Intern"
            const result = new Intern("Bob", 1, "bob@bob.com", "UVA").getRole()
            expect(result).toEqual(role)
        })
    })
})