import PlaylistCard from "@/components/PlaylistCard";
import { getUserLikedPlaylists } from "@/lib/actions";
import { getAuthSession } from "@/utils/serverUtils";
import { redirect } from "next/navigation";

export default async function ManagePlaylists() {
  const session = await getAuthSession();

  if(!session) {
    redirect('/login');
  }

  const playlists = (await getUserLikedPlaylists(
    session
  ));

  return (
    <div className="flex flex-1 flex-col bg-black">
      {
        playlists.map(playlist => (
            <PlaylistCard playlist={playlist}/>
           )
        )
      }
      
    </div>
  )
}