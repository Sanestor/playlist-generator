import type { Metadata } from "next";
import "./globals.css";
import { NextAuthProvider } from "@/providers/NextAuthProvider";

export const metadata: Metadata = {
    title: "Playlist Generator",
    description: "Spotify/AI Playlist Generator",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <NextAuthProvider>
                <body>{children}</body>
            </NextAuthProvider>
        </html>
    );
}
