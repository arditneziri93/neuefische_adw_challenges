
type Status = "online" | "offline" | "away";

type User = {
    username: string,
    status: Status,
    lastActivity: number,
}

function getUserStatus(users: User[]): Map<string, string[]> {
    const statusMap = new Map<string, string[]>();

    statusMap.set("online", []);
    statusMap.set("offline", []);
    statusMap.set("away", []);

    users.forEach((user) => {
        statusMap.get(user.status)?.push(user.username);
    });

    return statusMap;
}

const example = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 10
    },
    {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    },
    {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }
]

console.log(getUserStatus(example as User[]));
