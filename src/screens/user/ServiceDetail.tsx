import { Footer, Nav } from "../../components/layout";
import { Subscribe } from "../../components/user/home";

const ServiceDetail = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Nav />
      <div className="space-y-4 p-3 md:p-7"></div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
