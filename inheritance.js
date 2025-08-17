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