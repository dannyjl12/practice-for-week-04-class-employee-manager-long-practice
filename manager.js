const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager, employees) {
    super (name, salary, title, manager)
    this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        let sum = 0;
        for (let employee of this.employees) {
            if (employee instanceof Manager) {
                sum += employee.salary;
                sum += employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }
        return sum;
    }

    calculateBonus(multiplier) {
        return multiplier * (this.salary + this._totalSubSalary())
    }
}


module.exports = Manager;
