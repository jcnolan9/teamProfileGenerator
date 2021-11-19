const Employee = require('./Employee')

class Manager extends Employee {

    constructor(name, id, email, officeNum) {
        this.name = name
        this.id = id
        this. email = email
        this.officeNum = officeNum
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager