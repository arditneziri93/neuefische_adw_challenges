import { displayTitle } from "../../utils/utils.js";
displayTitle("1: Generic Identity Function");
// TODO: Make this function generic so it returns the same type as its input
function identity(arg) {
    return arg;
}
console.log(identity("hello"));
displayTitle("2. Generic Array Function");
// TODO: Write a generic function that returns the first element of an array
function getFirst(arr) {
    return arr[0];
}
const first = getFirst(["first", "second", "third"]);
console.log(first);
displayTitle("3. Generic Interface");
const numberBox = { value: 42 }; // This should be allowed
console.log(numberBox);
displayTitle("4. Generic Constraint");
// TODO: Only allow types that have a 'length' property
function printLength(item) {
    return item.length;
}
console.log(printLength("Text"));
displayTitle("5. Using Multiple Type Parameters");
// TODO: Complete the function to return a key-value tuple
function createPair(key, value) {
    return [key, value];
}
console.log(createPair("id", 2));
displayTitle("6. Generic with Default Type");
// TODO: Provide a default type for the generic parameter
function wrapValue(val) {
    return [val];
}
const defaultWrapped = wrapValue("test"); // should infer type
console.log(typeof defaultWrapped[0]);
displayTitle("7. Generic Utility Type");
const partial = { title: "test" };
console.log(partial);
displayTitle("8. Conditional Type with Generics");
const A = "hello"; // string
const B = 42;
// const C: TypeCheck<true> = true; // doesnt work
console.log(A);
console.log(B);
