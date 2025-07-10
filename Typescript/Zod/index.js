"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_js_1 = require("../../utils/utils.js");
var zod_1 = require("zod");
(0, utils_js_1.displayTitle)("Exercise 1: Basic Object Schema");
var UserSchema1 = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    isAdmin: zod_1.z.boolean(),
});
console.log(UserSchema1.safeParse({ id: 0, name: 2, email: "jasar.naim@gmail.com" }));
console.log(UserSchema1.safeParse({ id: 0, name: "Jasar Naim", email: "jasar.naim@gmail.com", isAdmin: false }));
(0, utils_js_1.displayTitle)("Exercise 2: Optional and Default Fields");
var UserSchema2 = zod_1.z.object({
    id: zod_1.z.number(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    isAdmin: zod_1.z.boolean().default(false),
    bio: zod_1.z.ostring(),
});
console.log(UserSchema2.safeParse({ id: 0, name: 2, email: "jasar.naim@gmail.com" }));
console.log(UserSchema2.safeParse({ id: 0, name: "Jasar Naim", email: "jasar.naim@gmail.com", isAdmin: true, bio: "Biography lorem ipsum dolor sit amet" }));
(0, utils_js_1.displayTitle)("Exercise 3: Array of Objects");
var data = [
    { id: 1, name: "Alice", email: "a@a.com", isAdmin: true },
    { id: 2, name: "Bob", email: "b@b.com" },
    { id: 3, name: "Invalid", email: 123 },
];
data.forEach(function (u) {
    try {
        var result = UserSchema2.parse(u);
        console.log(result);
    }
    catch (err) {
        if (err instanceof zod_1.z.ZodError) {
            console.log(err.errors);
        }
    }
});
