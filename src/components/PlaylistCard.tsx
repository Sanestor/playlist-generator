import { Playlist } from "@/types/types";
import Image from "next/image";

type Props = {
  playlist: Playlist;
};

export default function PlaylistCard({playlist}: Props) {
  return (
    <div className="flex flex-row relative w-[330px] h-[150px] border-white rounded-xl bg-dark-linear-gradient px-[20px]">
      <div className="absolute flex flex-row gap-[3px] text-xl text-white top-[10px] right-[10px]">
        <div className="rounded-full h-[6px] w-[6px] bg-white"/>
        <div className="rounded-full h-[6px] w-[6px] bg-white"/>
        <div className="rounded-full h-[6px] w-[6px] bg-white"/>
      </div>
      <div className="flex flex-1 justify-start items-center">
        <Image
          width={128}
          height={128}
          src={playlist.images[0]?.url}
          alt={`${playlist.name} playlist image`}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between items-start py-[15px] text-white">
        <p className="w-full select-none text-[16px] font-bold text-ellipsis line-clamp-3">{playlist.name}</p>
        <div className="gap-[5px]">
          <p className="select-none text-xs">Song Count: {playlist.tracks.total}</p>
          <p className="select-none text-xs">Artist Count: </p>
        </div>
      </div>
    </div>
  )
}