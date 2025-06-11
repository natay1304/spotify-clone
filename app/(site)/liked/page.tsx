import getLikedSongs from "@/app/actions/getLikedSongs";
import Header from "@/components/Header";

import Image from "next/image";
import LikedContent from "./components/LikedContent";

export const revalidate = 0;
const Liked = async () =>
{
  const songs = await getLikedSongs();
  if(songs.length === 0){
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs
      </div>
    )
  }

  return (
    <div
      className="
        bg-neutral-900
        rounded-lg
        h-full
        w-fullover
        flow-hidden
        overflow-y-auto">
          <Header>
            <div className="mt-20">
              <div className="
                flex
                flex-col
                md:flex-row
                items-center
                gap-x-5
                "
              >
                <div className="relative h-32 w-32 lg:h-44 lg:w-44">
                  <Image
                    fill
                    alt="PlayList"
                    className="object-cover"
                    src="/images/liked.png"
                  />
                </div>

                <div className="flex flex-col gap-y-2 mt-4 md:mt-0">
                  <p className="hiffen md:block font-semibold text-sm">
                    playlist
                  </p>
                  <h1 className="text-white text-4xl sm:text-5xl lg:text-7xl font-bold">
                    Liked Songs
                  </h1>

                </div>
              </div>
            </div>
          </Header>
          <LikedContent songs={songs}/>
    </div>
  )
}

export default Liked;
