"use client";
import React from "react";
import { signIn, signOut } from "next-auth/react";

type Props = {
    text: string;
    authType: "signin" | "signup" | "signout";
    classes?: string;
};

const AuthButton = ({ text, authType, classes }: Props) => {
    const handleAuth = () => {
        if (authType === "signout") {
            signOut();
            return;
        }
        if (authType === "signin" || authType === "signup") {
            signIn("spotify");
            return;
        }
    };

    return (
        <button
            className={
                classes
                    ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" +
                      " " +
                      classes
                    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            }
            onClick={handleAuth}
        >
            {text}
        </button>
    );
};

export default AuthButton;
