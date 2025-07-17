import { notFound } from "next/navigation";
import { User } from "../types/user";

const API_URL = process.env.API_URL;
//все пользователи
export async function getUsers (): Promise<User[]>  {
    const response = await fetch(`${API_URL}/users`, {
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
    const response = await fetch(`${API_URL}/users/${id}`, {
    });

    if (!response.ok) {
        notFound();
        // вызываем notFound()
    }
    const user: User = await response.json();
    return user;
}