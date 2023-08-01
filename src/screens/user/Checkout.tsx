import { Footer, Nav } from "../../components/layout";
import { CheckoutBody } from "../../components/user/checkout";
import { Subscribe } from "../../components/user/home";

const Checkout = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Nav />
      <div className="space-y-4 p-3 md:p-7">
        <CheckoutBody />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Checkout;
