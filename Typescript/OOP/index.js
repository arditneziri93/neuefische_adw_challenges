"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utils_js_1 = require("../../utils/utils.js");
(0, utils_js_1.displayTitle)("Exercise 1:  Creating Basic Classes");
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getDetails = function () {
        return this.year + " " + this.make + this.model;
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails());
(0, utils_js_1.displayTitle)("Exercise 2:  Working with Access Modifiers");
var BankAccount = /** @class */ (function () {
    function BankAccount(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        this.balance -= amount;
    };
    ;
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance());
(0, utils_js_1.displayTitle)("Exercise 3: Getters and Setters");
// Task: Create a `UserProfile` class with a private property `_email`.
// Use getter and setter for `email` with basic validation (must include '@').
var UserProfile = /** @class */ (function () {
    function UserProfile(email) {
        this._email = email;
    }
    UserProfile.prototype.email = function () {
        return this._email;
    };
    UserProfile.prototype.setEmail = function (email) {
        this._email = email;
    };
    return UserProfile;
}());
// Test
var user = new UserProfile("john@example.com");
console.log(user.email); // Should return valid email
// user.email = "wrongemail"; // Should throw an error
(0, utils_js_1.displayTitle)("Exercise 4: Inheritance and Method Overriding");
// Task: Create a base class `Employee` with:
// - name: string
// - getDetails(): string
// Create a derived class `Manager` that adds:
// - department: string
// - Overrides getDetails() to include department
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.getDetails = function () {
        return "Name: " + this.name;
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, departement) {
        var _this = _super.call(this, name) || this;
        _this.departement = departement;
        return _this;
    }
    Manager.prototype.getDetails = function () {
        return "Name: " + this.name + ", Department: " + this.departement;
    };
    return Manager;
}(Employee));
// Test
var manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());
(0, utils_js_1.displayTitle)("Exercise 5: Static Members");
// Task: Create a `MathHelper` class with:
// - static PI = 3.14
// - static method `circleArea(radius: number): number`
var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.circleArea = function (radius) {
        return this.PI * radius * radius;
    };
    MathHelper.PI = 3.14;
    return MathHelper;
}());
// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5
(0, utils_js_1.displayTitle)("Exercise 6: Abstract Classes");
// Task: Create an abstract class `Shape` with:
// - abstract method `getArea(): number`
// - name: string
// Create subclasses `Rectangle` and `Circle` that implement getArea.
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = name;
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(height, width) {
        var _this = _super.call(this, "Rectangle") || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(radius) {
        var _this = _super.call(this, "Circle") || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getArea = function () {
        return MathHelper.circleArea(this.radius);
    };
    return Circle;
}(Shape));
// Test
var shapes = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(function (shape) { return console.log("".concat(shape.name, " area: ").concat(shape.getArea())); });
(0, utils_js_1.displayTitle)("Exercise 7: Interfaces and Class Implementation");
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        return this.name + " says Woof!";
    };
    return Dog;
}());
// Test
var dog = new Dog("Rex");
console.log(dog.makeSound()); // "Rex says Woof!"
(0, utils_js_1.displayTitle)("Exercise 8: Function Interfaces");
var add = function (x, y) { return x + y; };
var multiply = function (x, y) { return x * y; };
// Test
console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
(0, utils_js_1.displayTitle)("Exercise 8: Function Interfaces");
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
// Test
var point = new Point(0, 0);
point.move(5, 3);
console.log(point); // Should show updated x and y
