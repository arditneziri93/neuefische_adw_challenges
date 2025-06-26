let list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

// Sort these numbers in descending order.
list.sort((a, b) => b - a);
console.log(list);

// Square these numbers.
list = list.map((e) => e * e);
console.log(list);

// Remove the lowest two numbers and the highest 4 numbers from the list.
list = list.slice(2, list.length - 4);
console.log(list);

// Remove all numbers that are divisible by 4.
list = list.filter((e) => e % 4 !== 0);
console.log(list);

// Add up all the numbers.
const sum = list.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
