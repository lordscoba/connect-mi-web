import { Advert, Carousel, Footer, Nav } from "../../components/layout";
import { Scomponents, Subscribe } from "../../components/user/home";
import {
  RecomendedServices,
  TopServices,
} from "../../components/user/services";

const Services = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <Nav />
        <Scomponents.HServices />
        <Carousel />
        <RecomendedServices />
        <TopServices />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Services;
