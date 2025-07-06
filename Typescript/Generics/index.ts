import { displayTitle } from "../../utils/utils.js";

displayTitle("1: Generic Identity Function");

// TODO: Make this function generic so it returns the same type as its input
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<string>("hello"));

displayTitle("2. Generic Array Function");

// TODO: Write a generic function that returns the first element of an array
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

const first = getFirst<string>(["first", "second", "third"]);
console.log(first);

displayTitle("3. Generic Interface");

// TODO: Turn this interface into a generic
interface Box<T> {
    value: T;
}

const numberBox: Box<number> = { value: 42 }; // This should be allowed
console.log(numberBox);

displayTitle("4. Generic Constraint");

// TODO: Only allow types that have a 'length' property
function printLength<T>(item: { length: number }): number {
    return item.length;
}
console.log(printLength("Text"));

displayTitle("5. Using Multiple Type Parameters");

// TODO: Complete the function to return a key-value tuple
function createPair<K, T>(key: K, value: T): [K, T] {
    return [key, value];
}
console.log(createPair<string, number>("id", 2));


displayTitle("6. Generic with Default Type");

// TODO: Provide a default type for the generic parameter
function wrapValue<T = string>(val: T): T[] {
    return [val];
}

const defaultWrapped = wrapValue("test"); // should infer type
console.log(typeof defaultWrapped[0]);

displayTitle("7. Generic Utility Type");

// TODO: Use Partial<T> to make all properties optional
type Todo = {
    title: string;
    completed: boolean;
};

type PartialTodo = Partial<Todo>;
const partial: PartialTodo = { title: "test" }
console.log(partial);


displayTitle("8. Conditional Type with Generics");

// TODO: Complete the type to return string if T extends string, else number
type TypeCheck<T extends string | number> = T;

const A: TypeCheck<'hello'> = "hello"; // string
const B: TypeCheck<42> = 42;
// const C: TypeCheck<true> = true; // doesnt work
console.log(A)
console.log(B);
