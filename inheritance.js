class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Method to return full name
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
    // Method to introduce the person
    introduce() {
        console.log(`Hello, my name is ${this.getFullName()} and I am ${this.age} years old.`);
    }
}
// Derived class: Employee (inherits from Person)
class Employee extends Person {
    constructor(firstName, lastName, age, employeeId, department, salary) {
        super(firstName, lastName, age); // Call parent constructor
        this.employeeId = employeeId;
        this.department = department;
        this.salary = salary;
    }
    // Method to get employee details
    getEmployeeDetails() {
        return `Employee ID: ${this.employeeId}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    // Override introduce method
    introduce() {
        super.introduce(); // Call the parent introduce
        console.log(`I work in the ${this.department} department and my salary is $${this.salary}.`);
    }
}
// Derived class: Manager (inherits from Employee)
class Manager extends Employee {
    constructor(firstName, lastName, age, employeeId, department, salary, teamSize) {
        super(firstName, lastName, age, employeeId, department, salary);
        this.teamSize = teamSize;
    }
    // Method to get manager details
    getManagerDetails() {
        return `${this.getEmployeeDetails()}, Manages a team of ${this.teamSize} people`;
    }
    // Override introduce method
    introduce() {
        super.introduce();
        console.log(`I manage a team of ${this.teamSize} people.`);
    }
    // Additional method
    conductMeeting() {
        console.log(`${this.getFullName()} is conducting a meeting for ${this.teamSize} team members.`);
    }
}