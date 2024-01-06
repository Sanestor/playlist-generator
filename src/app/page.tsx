import Link from "next/link";
import { getAuthSession } from "@/utils/serverUtils";
import {
    getNewReleases,
    getRecentlyPlayedTracks,
    getTopItems,
    getUserProfile,
    createPlaylist,
} from "@/lib/actions";
import { Artist, Track, Profile, Playlist } from "@/types/types";
import AuthButton from "@/components/AuthButton";
import Image from "next/image";

export default async function Home() {
    const session = await getAuthSession();
    if (!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    const topTracks = (await getTopItems({
        session,
        limit: 9,
        type: "tracks",
    }).then((data) => data.items)) as Track[];

    const allTimeTopTracks = (await getTopItems({
        session,
        limit: 10,
        timeRange: "long_term",
        type: "tracks",
    }).then((data) => data.items)) as Track[];

    const profile = (await getUserProfile(session).then(
        (data) => data
    )) as Profile;

    /*
    // create a new playlist
    const newPlaylist = (await createPlaylist({
        session,
        userId: profile.id,
        name: "New Playlist Name 2",
        description: "New playlist description 2.",
    }).then((data) => data)) as Playlist;
    console.log(newPlaylist);
    */

    return (
        <main className="flex min-h-screen flex-col items-center justify-start gap-5 p-24">
            {session ? (
                <>
                    <AuthButton
                        text="Logout"
                        authType="signout"
                        classes="bg-red-500"
                    />
                    <p>Logged in as:</p>
                    <p>{session.user.email}</p>
                    <p className="w-full break-words">
                        {JSON.stringify(session.user)}
                    </p>
                    <section className="flex flex-col gap-10 w-full">
                        <p className="text-4xl">Your all time top tracks:</p>
                        {allTimeTopTracks.map((track, index) => (
                            <section
                                key={track.id}
                                className="flex flex-col text-md gap-8 items-center sm:text-lg md:text-4xl md:items-start"
                            >
                                <p className="text-center">
                                    {index + 1 + ". "}
                                    {track.name}
                                </p>
                                <section className="flex flex-col items-center gap-8 p-0 md:flex-row md:items-start">
                                    <Image
                                        className="aspect-square min-h-52 min-w-52 h-52 w-52 md:h-64 md:w-64"
                                        src={track.album.images[0].url}
                                        alt={track.name}
                                        width={128}
                                        height={128}
                                    />
                                    <section className="flex flex-col items-center gap-2 text-sm text-center sm:text-md md:text-lg md:items-start">
                                        <section className="flex flex-col items-center md:items-start">
                                            <p className="font-bold">
                                                Artist:{" "}
                                            </p>
                                            {track.artists[0].name}
                                        </section>
                                        <section className="flex flex-col items-center md:items-start">
                                            <p className="font-bold">Album: </p>
                                            {track.album.name}
                                        </section>
                                        <section className="flex flex-col items-center md:items-start">
                                            <p className="font-bold">
                                                Released:{" "}
                                            </p>
                                            {new Date(
                                                track.album.release_date
                                            ).toLocaleDateString()}
                                        </section>
                                    </section>
                                </section>
                            </section>
                        ))}
                    </section>
                </>
            ) : (
                <Link
                    className="text-white-500 hover:underline text-lg font-semibold bg-green-600 p-4 rounded"
                    href="/login"
                >
                    Go to login
                </Link>
            )}
        </main>
    );
}
