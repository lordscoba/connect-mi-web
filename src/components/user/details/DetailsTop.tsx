import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import { GoCodeReview } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineVerifiedUser } from "react-icons/md";
import { PiBasketBold } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import {
  shirt1,
  shirt2,
  shirt3,
  shirt4,
  shirt5,
  shirt6,
  shirt7,
} from "../../../images/shirts";

const DetailsTop = () => {
  return (
    <div className="flex flex-col space-y-3">
      <div className="flex text-[#8B96A5] items-center space-x-1">
        <div className="">Home</div>
        <IoIosArrowForward />
        <div className="">Clothings</div>
        <IoIosArrowForward />
        <div className="">Men’s wear</div>
        <IoIosArrowForward />
        <div className="">Summer clothing</div>
      </div>
      <div className="flex flex-wrap gap-4 bg-white p-4 border-2 rounded-md">
        <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-1/3">
          <img src={shirt1} alt="" />
          <div className="flex space-x-2 overflow-x-auto whitespace-nowrap">
            <img src={shirt2} alt="" />
            <img src={shirt3} alt="" />
            <img src={shirt4} alt="" />
            <img src={shirt5} alt="" />
            <img src={shirt6} alt="" />
            <img src={shirt7} alt="" />
          </div>
        </div>
        <DetailsTopComponent1 />
        <DetailsTopComponent2 />
      </div>
    </div>
  );
};

const DetailsTopComponent1 = () => {
  return (
    <div className="flex flex-col space-y-4 w-full md:w-1/2 lg:w-1/3">
      <div className="text-[#00B517] flex space-x-2 items-center">
        <span className="text-2xl">
          <TiTick />
        </span>
        <span>In stock</span>
      </div>
      <div className="text-[#1C1C1C] font-[600]">
        Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle
      </div>
      <div className="flex space-x-3">
        <span className="flex items-center text-[#FF9017]">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar /> <span className="ms-1">4.3</span>
        </span>
        <span className="flex items-center text-[#787A80] space-x-1">
          <GoCodeReview />
          <span>32 Reviews</span>
        </span>
        <span className="flex items-center text-[#787A80] space-x-1">
          <PiBasketBold />
          <span>154 sold</span>
        </span>
      </div>
      <div className="flex bg-[#FFF0DF] p-3 border-2">
        <div className="flex flex-col border-r-2 px-3">
          <span>$98</span>
          <span className="text-sm text-[#606060]">50-100 pcs</span>
        </div>
        <div className="flex flex-col border-r-2 px-3">
          <span>$98</span>
          <span className="text-sm text-[#606060]">50-100 pcs</span>
        </div>
        <div className="flex flex-col ps-3">
          <span>$98</span>
          <span className="text-sm text-[#606060]">50-100 pcs</span>
        </div>
      </div>
      <div className="">
        <table className="table-auto w-full">
          <tbody className="">
            <tr className="border-b-2">
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Price:{" "}
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                Negotiable
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Type:{" "}
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                Classic shoes
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Material:{" "}
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                Plastic material
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Design:{" "}
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                Modern nice
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Customization:
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                Customized logo and design custom packages
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Protection:{" "}
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                Refund Policy
              </td>
            </tr>
            <tr className="border-b-2">
              <td className="border px-4 py-2 border-none text-[#8B96A5]">
                Warranty:{" "}
              </td>
              <td className="border px-4 py-2 border-none text-[#505050]">
                2 years full warranty{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const DetailsTopComponent2 = () => {
  return (
    <div className="flex flex-col space-y-3 p-2 w-2/3 md:w-1/3 lg:w-1/4">
      <div className="flex flex-col space-y-3 border-2 p-3 rounded-lg">
        <div className="flex flex-col border-b-2">
          <div className="">Supplier</div>
          <div className="">Guanjoi Trading LLC</div>
        </div>
        <div className="text-[#8B96A5]">Germany, Berlin</div>
        <div className="flex space-x-2 items-center text-[#8B96A5]">
          <span>
            <MdOutlineVerifiedUser />
          </span>
          <span>Verified Seller</span>
        </div>
        <div className="flex space-x-2 items-center text-[#8B96A5]">
          <span>
            <BsGlobe />
          </span>
          <span>Worldwide shipping</span>
        </div>
        <button className="bg-[#222F3E] text-white p-2 rounded-md">
          Process to cart
        </button>
        <button className="p-2 rounded-md border-2">Seller’s profile</button>
      </div>
      <div className="flex space-x-2 items-center self-center">
        <span>
          <MdFavoriteBorder />
        </span>
        <span>Save for later</span>
      </div>
    </div>
  );
};

export default DetailsTop;
