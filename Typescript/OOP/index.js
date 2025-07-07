import { displayTitle } from "../../utils/utils.js";
displayTitle("Exercise 1:  Creating Basic Classes");
class Car {
    make;
    model;
    year;
    getDetails() {
        return this.year + " " + this.make + this.model;
    }
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails());
displayTitle("Exercise 2:  Working with Access Modifiers");
class BankAccount {
    balance;
    accountNumber;
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }
    ;
    getBalance() {
        return this.balance;
    }
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
}
const account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance());
displayTitle("Exercise 3: Getters and Setters");
// Task: Create a `UserProfile` class with a private property `_email`.
// Use getter and setter for `email` with basic validation (must include '@').
class UserProfile {
    _email;
    email() {
        return this._email;
    }
    setEmail(email) {
        this._email = email;
    }
    constructor(email) {
        this._email = email;
    }
}
// Test
const user = new UserProfile("john@example.com");
console.log(user.email); // Should return valid email
// user.email = "wrongemail"; // Should throw an error
displayTitle("Exercise 4: Inheritance and Method Overriding");
// Task: Create a base class `Employee` with:
// - name: string
// - getDetails(): string
// Create a derived class `Manager` that adds:
// - department: string
// - Overrides getDetails() to include department
class Employee {
    name;
    getDetails() {
        return "Name: " + this.name;
    }
    constructor(name) {
        this.name = name;
    }
}
class Manager extends Employee {
    departement;
    getDetails() {
        return "Name: " + this.name + ", Department: " + this.departement;
    }
    constructor(name, departement) {
        super(name);
        this.departement = departement;
    }
}
// Test
const manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());
displayTitle("Exercise 5: Static Members");
// Task: Create a `MathHelper` class with:
// - static PI = 3.14
// - static method `circleArea(radius: number): number`
class MathHelper {
    static PI = 3.14;
    static circleArea(radius) {
        return this.PI * radius * radius;
    }
}
// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5
displayTitle("Exercise 6: Abstract Classes");
// Task: Create an abstract class `Shape` with:
// - abstract method `getArea(): number`
// - name: string
// Create subclasses `Rectangle` and `Circle` that implement getArea.
class Shape {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Rectangle extends Shape {
    height;
    width;
    getArea() {
        return this.height * this.width;
    }
    constructor(height, width) {
        super("Rectangle");
        this.height = height;
        this.width = width;
    }
}
class Circle extends Shape {
    radius;
    getArea() {
        return MathHelper.circleArea(this.radius);
    }
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }
}
// Test
const shapes = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(shape => console.log(`${shape.name} area: ${shape.getArea()}`));
displayTitle("Exercise 7: Interfaces and Class Implementation");
class Dog {
    name;
    makeSound() {
        return this.name + " says Woof!";
    }
    constructor(name) {
        this.name = name;
    }
}
// Test
const dog = new Dog("Rex");
console.log(dog.makeSound()); // "Rex says Woof!"
displayTitle("Exercise 8: Function Interfaces");
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
// Test
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
displayTitle("Exercise 8: Function Interfaces");
class Point {
    x;
    y;
    move(dx, dy) {
        this.x += dx;
        this.y += dy;
    }
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
// Test
const point = new Point(0, 0);
point.move(5, 3);
console.log(point); // Should show updated x and y
