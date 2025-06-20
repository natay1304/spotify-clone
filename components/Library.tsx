"use client";

import useAuthModal from "@/hooks/useAuthModal";
import useUploadModal from "@/hooks/useUploadModal";
import { useUser } from "@/hooks/useUser";
import { Song } from "@/types";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import MediaItem from "@/components/MediaItem";
import useOnPlay from "@/hooks/useOnPlay";

interface LibraryProps {
  songs: Song[]
}

const Library: React.FC<LibraryProps> = ({
  songs
}) => {

  const onPlay = useOnPlay(songs);

    const authModal = useAuthModal();
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const onClick = () => {
      if(!user){
        return authModal.onOpen();
      }

      return uploadModal.onOpen();

    }
    return(
        <div className="flex flex-col">
            <div className="
              flex
              item-center,
              justify-between
              px-5
              pt-4"
            >
              <div className="
                  inline-flex
                  items-center
                  gap-x-2"
              >
                  <TbPlaylist className="text-neutral-400" size={10} />
                    <p className="text-neutral-400
                      font-medium
                      text-md
                      "
                    >
                        Library
                  </p>
              </div>
                <AiOutlinePlus
                  onClick={onClick}
                  size={20}
                  className="text-neutral-400
                    cursor-pointer
                    hover:text-white
                    transition
                  "/>
            </div>
            <div className="
                flex
                flex-col
                gap-y-2
                mt-4
                px-3
            ">
                {songs.map((item) => (
                  <MediaItem
                    onClick={(id:string)=>{onPlay(id)}}
                    key={item.id}
                    data = {item}
                  />
                ))}
            </div>
        </div>
    )
}

export default Library;
