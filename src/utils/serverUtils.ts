"use server";

import authOptions from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { AuthSession } from "@/types/types";

export const getAuthSession = async () => {
    const session = (await getServerSession(authOptions)) as AuthSession;
    if (!session) {
        return null;
    }

    const currentTimestamp = Math.floor(Date.now());
    if (currentTimestamp >= session.user.expires_at * 1000) {
        return null;
    }

    return session;
};

export const customGet = async (url: string, session: AuthSession | null) => {
    if (!session) {
        return null;
    }
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
        },
    }).then((res) => res.json());

    return res;
};

export const customPost = async (
    url: string,
    session: AuthSession | null,
    body: any
) => {
    if (!session) {
        return null;
    }
    const res = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${session.user.accessToken}`,
        },
        body: body,
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
    return res;
};
