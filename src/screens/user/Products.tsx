import { Advert, Footer, Nav } from "../../components/layout";
import {
  Hproducts,
  NewArrival,
  RecommendedComponents,
  Subscribe,
} from "../../components/user/home";
import { Pcarousel, RecommendedProducts } from "../../components/user/products";

const Products = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <Nav />
        <Pcarousel />
        <Hproducts />
        <RecommendedProducts />
        <RecommendedComponents.HRecommended />
        <NewArrival />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Products;
