"use client";

import { useState, useMemo, useRef, ChangeEvent } from "react";
import { User } from "@/types/user";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input} from "@/components/ui/Input";
import Link from "next/link";

interface UserListProps {
  users: User[];
}

export default function UserList({ users }: UserListProps) {
  const [search, setSearch] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredUsers = useMemo<User[]>(() => {
    const q = search.trim().toLowerCase();
    return users.filter((u) => u.name.toLowerCase().includes(q));
  }, [users, search]);

  const handleSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Input
        ref={inputRef}
        placeholder="Введите имя пользователя"
        value={search}
        onChange={handleSearchInput}
        className="mb-12 max-w-md"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.map((user) => (
          <Link
            key={user.id}
            href={`/user/${user.id}`}
            className="group block hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{user.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p 
                  className="font-medium">Email: {user.email}
                </p>
                <p 
                  className="font-medium">Компания: {user.company.name}
                </p>
                <CardFooter>
                  <p 
                    className="mt-10 text-black w-min rounded-sm group-hover:bg-emerald-100 border-1 border-emerald-400 py-1 px-5 group-hover:font-medium">
                      Подробнее
                  </p>
                </CardFooter>
              </CardContent>
            </Card>
          </Link>
        ))}
        {filteredUsers.length === 0 && (
          <p className="col-span-full text-center text-muted-foreground">
            По запросу «{search}» ничего не найдено:(
          </p>
        )}
      </div>
    </>
  );
}
