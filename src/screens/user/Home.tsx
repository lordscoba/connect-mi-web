import { Advert, Footer, Nav } from "../../components/layout";
import {
  Hproducts,
  Hslider,
  NewArrival,
  RecommendedComponents,
  Scomponents,
  Subscribe,
} from "../../components/user/home";

const Home = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <Nav />
        <Scomponents.HServices />
        <Hslider />
        <Hproducts />
        <RecommendedComponents.HRecommended />
        <NewArrival />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
