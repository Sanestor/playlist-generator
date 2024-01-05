"use client";

import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

export default function Login() {
    const handleLogin = () => {
        signIn("spotify");
    };

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-20">
            <Image
                src="/images/auth/spotify_logo.png"
                alt="spotify logo"
                width={320}
                height={96}
            />
            <button
                className="flex px-12 py-2 text-lg tracking-widest uppercase rounded-full focus:outline-none bg-primary hover:bg-opacity-80"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}
