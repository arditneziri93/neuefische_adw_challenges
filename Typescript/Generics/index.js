"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_js_1 = require("../../utils/utils.js");
(0, utils_js_1.displayTitle)("1: Generic Identity Function");
// TODO: Make this function generic so it returns the same type as its input
function identity(arg) {
    return arg;
}
console.log(identity("hello"));
(0, utils_js_1.displayTitle)("2. Generic Array Function");
// TODO: Write a generic function that returns the first element of an array
function getFirst(arr) {
    return arr[0];
}
var first = getFirst(["first", "second", "third"]);
console.log(first);
(0, utils_js_1.displayTitle)("3. Generic Interface");
var numberBox = { value: 42 }; // This should be allowed
console.log(numberBox);
(0, utils_js_1.displayTitle)("4. Generic Constraint");
// TODO: Only allow types that have a 'length' property
function printLength(item) {
    return item.length;
}
console.log(printLength("Text"));
(0, utils_js_1.displayTitle)("5. Using Multiple Type Parameters");
// TODO: Complete the function to return a key-value tuple
function createPair(key, value) {
    return [key, value];
}
console.log(createPair("id", 2));
(0, utils_js_1.displayTitle)("6. Generic with Default Type");
// TODO: Provide a default type for the generic parameter
function wrapValue(val) {
    return [val];
}
var defaultWrapped = wrapValue("test"); // should infer type
console.log(typeof defaultWrapped[0]);
(0, utils_js_1.displayTitle)("7. Generic Utility Type");
var partial = { title: "test" };
console.log(partial);
(0, utils_js_1.displayTitle)("8. Conditional Type with Generics");
var A = "hello"; // string
var B = 42;
// const C: TypeCheck<true> = true; // doesnt work
console.log(A);
console.log(B);
