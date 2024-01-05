import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/utils/serverUtils";
import { signOut } from "next-auth/react";
import AuthButton from "@/components/AuthButton";

export default async function Home() {
    //const session = await getAuthSession();
    const session = await getAuthSession();

    if (!session) {
        redirect("/login");
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-5 p-24">
            {session ? (
                <AuthButton
                    text="Logout"
                    authType="signout"
                    classes="bg-red-500"
                />
            ) : (
                <Link
                    className="text-white-500 hover:underline text-lg font-semibold bg-green-600 p-4 rounded"
                    href="/login"
                >
                    Go to login
                </Link>
            )}
            <p>Logged in as:</p>
            <p>{session.user.email}</p>
        </main>
    );
}
