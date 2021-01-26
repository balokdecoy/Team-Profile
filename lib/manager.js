const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;