import { Advert, Footer, Nav } from "../../components/layout";
import {
  HRecommended,
  HServices,
  Hproducts,
  Hslider,
  NewArrival,
  Subscribe,
} from "../../components/user/home";

const Home = () => {
  return (
    <div className="bg-[#F4F4F4]">
      <Advert />
      <div className="space-y-4 p-5">
        <Nav />
        <HServices />
        <Hslider />
        <Hproducts />
        <HRecommended />
        <NewArrival />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Home;
