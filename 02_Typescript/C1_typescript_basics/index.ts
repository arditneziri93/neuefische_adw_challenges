// ------ 1

let age: number = 31;

for (let i: number = 1; i < age; i++) {
    if (i > 18) {
        console.log("You are over 18");
    } else {
        console.log("You are underage");
    }
}

// ------ 2

let score: number = 0;

if (score != 0) {
    console.log("Score is available");
}

if (score) {
    console.log("Score is evaluated as truthy.");
} else {
    console.log("Score is not truthy.");
}

// ------ 3

let username = "";

if (username) {
    console.log("Username is evaluated as truthy");
} else {
    console.log("Username is evaluated as falsy");
}

// ------ 4

let isAdmin: boolean = false;

if (isAdmin) {
    console.log("isAdmin is evaluated as truthy");
} else {
    console.log("isAdmin is evaluated as falsy");
}
