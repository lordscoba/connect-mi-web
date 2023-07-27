import { Advert, Footer, Nav } from "../../components/layout";
import {
  DetailsTab,
  DetailsTop,
  Discount,
  RelatedProducts,
} from "../../components/user/details";
import { Subscribe } from "../../components/user/home";

const Details = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <Nav />
        <DetailsTop />
        <DetailsTab />
        <RelatedProducts />
        <Discount />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Details;
