import { Footer, Nav } from "../../components/layout";
import { CartDetails, CartWishlist } from "../../components/user/cart";
import { Subscribe } from "../../components/user/home";

const Cart = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <Nav />
      <div className="space-y-4 p-3 md:p-7">
        <CartDetails />
        <CartWishlist />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
};

export default Cart;
