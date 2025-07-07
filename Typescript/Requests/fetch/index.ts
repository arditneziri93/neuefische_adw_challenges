let response: Response;
let data: {};

interface Post {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export async function getResponse(): Promise<void> {
    response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    const data: Post[] = await response.json();
    console.log(data[0]);
}

getResponse();
