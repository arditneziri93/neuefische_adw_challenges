"use strict";
function getUserStatus(users) {
    const statusMap = new Map();
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
];
console.log(getUserStatus(example));
