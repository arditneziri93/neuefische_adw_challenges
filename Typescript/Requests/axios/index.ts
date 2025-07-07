import axios from "axios";
import { displayTitle } from "../../../utils/utils.js";

interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

async function getAllUser(): Promise<string[]> {
    const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
    const nameList = response.data.map((e) => e.name) as string[];
    console.log(nameList);
    return nameList;
}

getAllUser();
