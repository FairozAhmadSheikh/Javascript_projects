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