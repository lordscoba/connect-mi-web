import { Advert, Footer, Nav } from "../../components/layout";
import {
  HRecommended,
  HServices,
  Hproducts,
  Hslider,
  NewArrival,
} from "../../components/user/home";

const Home = () => {
  return (
    <div className="">
      <Advert />
      <Nav />
      <HServices />
      <Hslider />
      <Hproducts />
      <HRecommended />
      <NewArrival />
      <Footer />
    </div>
  );
};

export default Home;
