import { Advert, Footer } from "../../components/layout";
import { Subscribe } from "../../components/user/home";
import { SupportBody, SupportHero } from "../../components/user/support";

const Support = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Advert />
      <div className="space-y-4 p-3 md:p-7">
        <SupportHero />
        <SupportBody />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Support;
