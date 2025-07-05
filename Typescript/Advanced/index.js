import { displayTitle } from "../../utils/utils.js";
// Exercise 1: Basic Types and Interfaces
displayTitle("Exercise 1: Basic Types and Interfaces");
function getUserInfo(user) {
    return "User " + user.id + ": " + user.name + " (" + user.email + ")";
}
const testUser = { id: 1, name: "John", email: "john@example.com" };
console.log(getUserInfo(testUser));
// Exercise 2: Union Types and Optional Properties
displayTitle("Exercise 2: Union Types and Optional Properties");
function isActive(account) {
    return account.status === "active";
}
const testAccounts = [
    {
        username: "account1",
        status: "inactive",
    },
    {
        username: "account2",
        status: "active",
        lastLogin: new Date(),
    },
    {
        username: "account3",
        status: "inactive",
    }
];
testAccounts.forEach((e) => {
    console.log(isActive(e));
});
// Exercise 3: Type Assertions
displayTitle("Exercise 3: Type Assertions");
function getLength(input) {
    return input.toString().length;
}
console.log(getLength("test"));
// Exercise 4: Index Signatures
displayTitle("Exercise 4: Index Signatures");
function printValues(obj) {
    for (let key in obj) {
        console.log(key + ": " + obj[key]);
    }
}
printValues({ foo: "bar", baz: "qux" });
// Exercise 5: Higher-Order Functions
displayTitle("Exercise 5: Higher-Order Functions");
function applyOperation(a, b, operation) {
    return operation(a, b);
}
console.log(applyOperation(2, 3, (x, y) => x + y)); // 5
console.log(applyOperation(10, 1, (x, y) => x - y)); // 9
console.log(applyOperation(4, 5, (x, y) => x * y)); // 20
console.log(applyOperation(10, 5, (x, y) => x / y)); // 2
// Exercise 6: Combining Interfaces and Union Types
displayTitle("Exercise 6: Combining Interfaces and Union Types");
function getShape(shape) {
    if (shape.kind === "rectangle") {
        return shape.height * shape.width;
    }
    else {
        return shape.size * shape.size;
    }
}
console.log(getShape({ kind: "rectangle", width: 4, height: 5 }));
console.log(getShape({ kind: "square", size: 5 }));
// Exercise 7: Optional Chaining and Nullish Coalescing (Bonus)
displayTitle("Exercise 7: Optional Chaining and Nullish Coalescing");
function getEmail(profile) {
    return profile.contact?.email ?? "No email provided";
}
console.log(getEmail({ contact: { email: "test@gmail.com" } }));
console.log(getEmail({}));
