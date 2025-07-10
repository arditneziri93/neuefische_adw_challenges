import { displayTitle } from "../../utils/utils.js";
import { z } from "zod";

displayTitle("Exercise 1: Basic Object Schema");

const UserSchema1 = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    isAdmin: z.boolean(),
});
console.log(UserSchema1.safeParse({ id: 0, name: 2, email: "jasar.naim@gmail.com" }));
console.log(UserSchema1.safeParse({ id: 0, name: "Jasar Naim", email: "jasar.naim@gmail.com", isAdmin: false }));

displayTitle("Exercise 2: Optional and Default Fields");

const UserSchema2 = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    isAdmin: z.boolean().default(false),
    bio: z.ostring(),
});
console.log(UserSchema2.safeParse({ id: 0, name: 2, email: "jasar.naim@gmail.com" }));
console.log(UserSchema2.safeParse({ id: 0, name: "Jasar Naim", email: "jasar.naim@gmail.com", isAdmin: true, bio: "Biography lorem ipsum dolor sit amet" }));

displayTitle("Exercise 3: Array of Objects");

const data = [
    { id: 1, name: "Alice", email: "a@a.com", isAdmin: true },
    { id: 2, name: "Bob", email: "b@b.com" },
    { id: 3, name: "Invalid", email: 123 },
];

data.forEach((u) => {
    try {
        const result = UserSchema2.parse(u);
        console.log(result);
    } catch (err) {
        if (err instanceof z.ZodError) {
            console.log(err.errors);
        }
    }
})

displayTitle("Exercise 4: Literal and Enums");


type ProductSchema = {
    name: string
    price: number
    category: Category,
}

type Category = "clothing" | "books" | "electronics";
