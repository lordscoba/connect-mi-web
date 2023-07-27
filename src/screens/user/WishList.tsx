import { Advert, Footer, Nav } from "../../components/layout";
import SeachHistory from "../../components/layout/SearchHistory";
import { NewArrival, Subscribe } from "../../components/user/home";
import { RecommendedProducts } from "../../components/user/products";
import { WishItems } from "../../components/user/wishlist";

const WishList = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <Nav />
        <WishItems />
        <RecommendedProducts />
        <NewArrival />
        <SeachHistory />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default WishList;
