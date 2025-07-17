"use client";
import Link from "next/link";
import { User } from "@/types/user";
import { Button } from "@/components/ui/button";

interface UserDetailsProps {
    user: User;
}

export default function UserDetails ({ user }: UserDetailsProps) {
    return (
    <main className="mx-auto max-w-screen-xl space-y-4">
        <div className="flex justify-start">
            <Button className="px-4 py-2">
                <Link href="/">Вернуться к списку</Link>
            </Button>
        </div>
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <div className="space-y-2 text-sm">
            <p 
                className="font-medium"> Username: {user.username} 
            </p>
            <p 
                className="font-medium" >Email: {user.email}
            </p>
            <p 
                className="font-medium"> Address: {`${user.address.street}, ${user.address.city}`}
            </p>
            <p  
                className="font-medium"> Phone: {user.phone}
            </p>
            <p 
                className="font-medium"> Website: {user.website}
            </p>
            <p  
                className="font-medium"> Company: {user.company.name}
            </p>
        </div>
    </main>
    );
}