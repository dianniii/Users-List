"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-emerald-100">
        <div className="mx-auto max-w-screen-xl px-6 flex h-18 items-center justify-start">
            <Link href="/" className="text-xl font-bold text-black">Users List</Link>
        </div>
        </header>
    );
    }