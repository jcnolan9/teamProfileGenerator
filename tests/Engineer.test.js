const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object with name, id, and email and github properties", () => {
            const obj = new Engineer("Bob", 1, "bob@bob.com", "bob123")
            expect('name' in obj && 'id' in obj && 'email' in obj && 'github' in obj).toEqual(true)
        })
    })
    describe("getGithub", () => {
        it("should retunr the github of the empployee", () => {
            const github = "bob123"
            const result = new Engineer("Bob", 1, "bob@bob.com", "bob123").getGithub()
            expect(result).toEqual(github)
        })
    })
    describe("getRole", () => {
        it("should return the role of the empployee", () => {
            const role = "Engineer"
            const result = new Engineer("Bob", 1, "bob@bob.com", "bob123").getRole()
            expect(result).toEqual(role)
        })
    })
})