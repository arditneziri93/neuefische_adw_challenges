import { displayTitle } from "../../utils/utils.js";

displayTitle("Exercise 1:  Creating Basic Classes");

class Car {
    make: string;
    model: string;
    year: number;

    getDetails(): string {
        return this.year + " " + this.make + this.model;
    }

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;


    }
}

const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails());


displayTitle("Exercise 2:  Working with Access Modifiers");

class BankAccount {
    private balance: number;
    public readonly accountNumber: string;
    public deposit(amount: number) {
        this.balance += amount;
    }
    public withdraw(amount: number) {
        this.balance -= amount;
    };

    public getBalance(): number {
        return this.balance;
    }

    constructor(accountNumber: string, balance: number) {
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
    private _email: string;

    email(): string {
        return this._email;
    }

    setEmail(email: string) {
        this._email = email;
    }

    constructor(email: string) {
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
    name: string;

    getDetails(): string {
        return "Name: " + this.name;
    }

    constructor(name: string) {
        this.name = name;
    }
}

class Manager extends Employee {
    departement: string;

    getDetails(): string {
        return "Name: " + this.name + ", Department: " + this.departement;
    }
    constructor(name: string, departement: string) {
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
    static circleArea(radius: number): number {
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

abstract class Shape {
    name: string;
    abstract getArea(): number;

    constructor(name: string) {
        this.name = name;

    }
}

class Rectangle extends Shape {
    height: number;
    width: number;

    getArea(): number {
        return this.height * this.width;
    }

    constructor(height: number, width: number) {
        super("Rectangle");
        this.height = height;
        this.width = width;
    }
}

class Circle extends Shape {
    radius: number;

    getArea(): number {
        return MathHelper.circleArea(this.radius);
    }

    constructor(radius: number) {
        super("Circle");
        this.radius = radius;
    }
}

// Test
const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(shape => console.log(`${shape.name} area: ${shape.getArea()}`));


displayTitle("Exercise 7: Interfaces and Class Implementation");

// Task: Define an interface `Animal` with:
// - name: string
// - makeSound(): string

// Create a class `Dog` that implements `Animal`.

interface Animal {
    name: string;
    makeSound(): string;
}

class Dog implements Animal {
    name: string;
    makeSound(): string {
        return this.name + " says Woof!";
    }
    constructor(name: string) {
        this.name = name;
    }
}

// Test
const dog = new Dog("Rex");
console.log(dog.makeSound()); // "Rex says Woof!"


displayTitle("Exercise 8: Function Interfaces");

// Task: Define an interface `MathOperation` that describes a function:
// (x: number, y: number) => number

// Implement two variables `add` and `multiply` that match the interface.

interface MathOperation {
    (x: number, y: number): number;
}

const add: MathOperation = (x, y) => x + y;
const multiply: MathOperation = (x, y) => x * y;

// Test
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6

displayTitle("Exercise 8: Function Interfaces");

// Task:
// - Create a type alias `Coordinates` with `x` and `y` properties.
// - Create an interface `Movable` with method `move(dx: number, dy: number): void`
// - Implement a class `Point` that uses both.

type Coordinates = {
    x: number;
    y: number;
};

interface Movable {
    move(dx: number, dy: number): void;
}

class Point implements Coordinates, Movable {
    x: number;
    y: number;

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

// Test
const point = new Point(0, 0);
point.move(5, 3);
console.log(point); // Should show updated x and y
