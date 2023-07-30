import { BsShareFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { Product_1 } from "../../../images/list";
import { Star } from "../Search/SearchCard";

const WishItems = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex text-[#8B96A5] items-center space-x-1 justify-self-start">
        <div className="">Home</div>
        <IoIosArrowForward />
        <div className="">Wishlist</div>
      </div>
      <div className="flex flex-row justify-between p-3 bg-white shadow-md rounded-md lg:w-2/3 md:w-4/5 md:self-center">
        <div className="">All items (2)</div>
        <div className="flex items-center space-x-3">
          <span>
            <BsShareFill />
          </span>{" "}
          <span>Share list with friends</span>
        </div>
      </div>
      <WishItemsList />
      <WishItemsList />
      <button className="bg-[#222F3E] px-8 py-2 rounded-md text-white self-end md:me-40 lg:me-60">
        Process to cart
      </button>
    </div>
  );
};

const WishItemsList = () => {
  return (
    <div className="flex space-x-1 md:space-x-3 bg-white p-2 md:p-3 rounded-md shadow-md lg:w-2/3 md:w-4/5 md:self-center">
      <img className="object-cover" src={Product_1} alt="" />
      <div className="flex flex-col space-y-3">
        <div className="flex flex-wrap gap-4 justify-between">
          <span>Canon Cmera EOS 2000, Black 10x zoom</span>
          <button className="bg-[#222F3E] p-2 rounded-md text-white">
            Buy Now
          </button>
        </div>
        <div className="">
          <span className="font-[600] text-sm">$998.00</span>{" "}
          <span className="text-[#8B96A5] line-through font-[700] text-sm">
            $1128.00
          </span>
        </div>
        <div className="flex flex-wrap space-x-2">
          <span className="text-[#FF9017] flex items-center space-x-2">
            <Star /> <span className="text-sm">4.5</span>
          </span>{" "}
          <span className="text-[#8B96A5] text-sm">154 orders</span>{" "}
          <span className="text-[#00B517] text-sm">Free Shipping</span>
        </div>
        <div className="text-[#505050] text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </div>
        <div className="flex flex-wrap gap-4 justify-between">
          <Link to={""} className="text-[#0D6EFD] text-sm">
            View details
          </Link>
          <button className="flex items-center p-2 space-x-2">
            <span>
              <MdDelete />
            </span>
            <span>Remove item</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishItems;
