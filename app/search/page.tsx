import Header from "@/components/Header";
import getSongsByTitle from "../actions/getSongsByTitle";
import SearchImport from "@/components/SearchImport";
import SearchContent from "./components/SearchContent";

interface SearchProps{
  searchParams:{
    title:string;
  }
};

const Search = async({searchParams} : SearchProps) => {
  const songs = await getSongsByTitle(searchParams?.title);
  return (
    <div className="
      bg-neutral-900
      rounded-lg
      h-full
      w-full
      overflow-hidden
      overflow-y-auto
    ">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-3xl text-white font-semibold">
            Search Results
          </h1>
          <SearchImport/>
        </div>
      </Header>
      <SearchContent songs={songs}/>
    </div>
  )
};

export default Search;
