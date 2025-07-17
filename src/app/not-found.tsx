"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex flex-col items-center justify-center space-y-6 h-1.5 mt-70">
            <h1 className="text-5xl font-bold">404</h1>
        <p className="text-xl">Упсссс, что-то пошло не так:(</p>
        <Link
            href="/"
            className="text-sm text-black hover:font-bold hover:underline"
        >
            ← Вернуться на главную
        </Link>
        </main>
    );
}
