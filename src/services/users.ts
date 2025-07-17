import { notFound } from "next/navigation";
import { User } from "../types/user";

//все пользователи
export async function getUsers (): Promise<User[]>  {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        cache: 'force-cache',
    });
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    const data: User[] = await response.json();
    return data;
}

//один пользователь
export async function getUser (id: string): Promise<User | null> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    });

    if (!response.ok) {
        notFound();
        // вызываем notFound()
    }
    const user: User = await response.json();
    return user;
}