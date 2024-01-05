import NextAuth, { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const scope =
    "user-read-recently-played user-top-read playlist-read-private user-read-email user-read-private user-library-read playlist-read-collaborative playlist-modify-private playlist-modify-public";

const params = {
    scope: scope,
};

const LOGIN_URL =
    "https://accounts.spotify.com/authorize?" +
    new URLSearchParams(params).toString();

const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID as string,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
            authorization: LOGIN_URL,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        // upon successful login, redirect to home page
        async redirect({ url, baseUrl }) {
            return baseUrl;
        },
        async jwt({ token, account }) {
            if (account) {
                token.id = account.id;
                token.expires_at = account.expires_at;
                token.accessToken = account.access_token;
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: "/login",
    },
};

export default authOptions;
