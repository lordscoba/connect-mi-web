import { Advert, Footer, Nav } from "../../components/layout";
import { SearchCard } from "../../components/user/Search";
import { Subscribe } from "../../components/user/home";

const Search = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <Nav />
        <SearchCard />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Search;
