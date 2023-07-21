import { IconContext } from "react-icons";
import { BiMenuAltLeft, BiSearch } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { PiSeal } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { Logo } from "../../images/logo";

const Nav = () => {
  return (
    <div>
      <div className="flex flex-row justify-center space-x-4 p-4">
        <div className="flex items-center space-x-2">
          <img className="h-5" src={Logo} alt="" />
          <div className="">Sell on Connect MI</div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <TbTruckDelivery />
          <div className="">Track Your Orders</div>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <PiSeal />
          <div className="">All Offers</div>
        </div>
        <div className="flex items-center space-x-2">
          <GrFavorite />
          <div className="">Wishlist</div>
        </div>
      </div>
      <div className="flex flex-col space-y-5 md:space-y-0 bg-white rounded-xl p-4">
        <div className="flex md:justify-center justify-between space-x-8 items-center">
          <div className="bg-[#D7DADC] rounded-md">
            <IconContext.Provider value={{ size: "2rem" }}>
              <BiMenuAltLeft />
            </IconContext.Provider>
          </div>
          <div className="flex items-center space-x-2">
            <img className="h-5" src={Logo} alt="" />
            <div className="">Connect MI</div>
          </div>
          <div className="hidden md:flex bg-[#ffffff] w-1/3 items-center p-2 justify-around border-2 border-black rounded-xl">
            <IconContext.Provider value={{ size: "2rem" }}>
              <BiSearch />
            </IconContext.Provider>
            <input
              className="border-none outline-none shadow-none py-2 w-2/3"
              type="text"
              name=""
              id=""
              placeholder="Search a product or a service"
            />
            <button className="bg-[#222F3E] px-4 py-2 text-white rounded-xl">
              search
            </button>
          </div>
          <div className="hidden md:flex items-center">
            <IconContext.Provider value={{ size: "2rem" }}>
              <HiOutlineUser />
            </IconContext.Provider>

            <button>Sign Up/Sign In</button>
          </div>
          <div className="flex relative">
            <IconContext.Provider value={{ size: "2rem" }}>
              <BsCart />
            </IconContext.Provider>
            <span className="px-2 py-1 bg-red-600 text-white rounded-full absolute left-5 -top-4">
              0
            </span>
          </div>
        </div>
        <div className="flex md:hidden bg-[#ffffff] w-full items-center p-2 justify-around border-2 border-black rounded-xl">
          <IconContext.Provider value={{ size: "2rem" }}>
            <BiSearch />
          </IconContext.Provider>
          <input
            className="border-none outline-none shadow-none py-2 w-2/3"
            type="text"
            name=""
            id=""
            placeholder="Search a product or a service"
          />
          <button className="bg-[#222F3E] px-4 py-2 text-white rounded-xl">
            search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
