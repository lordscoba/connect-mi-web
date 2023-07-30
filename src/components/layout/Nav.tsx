import { useRef } from "react";
import { IconContext } from "react-icons";
import { BiSearch, BiSupport } from "react-icons/bi";
import { BsBoxSeam, BsCart } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineUser } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { PiHandCoins, PiSeal } from "react-icons/pi";
import { TbClipboardList, TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import { Logo } from "../../images/logo";

const Nav = () => {
  const openRef = useRef<any>("");
  const flexRef = useRef<any>("hidden");

  const skrill = () => {
    openRef.current.className ===
    "open hamburger focus:outline-none bg-[#E0E0E0] p-8 md:p-6 rounded-lg"
      ? (openRef.current.className =
          "hamburger focus:outline-none bg-[#E0E0E0] p-8 md:p-6 rounded-lg")
      : (openRef.current.className =
          "open hamburger focus:outline-none bg-[#E0E0E0] p-8 md:p-6 rounded-lg");

    flexRef.current.className === "hidden md:hidden"
      ? (flexRef.current.className = "md:hidden")
      : (flexRef.current.className = "hidden md:hidden");

    // console.log(openRef.current.className);
    // console.log(flexRef.current.className);
  };
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
          <button
            onClick={skrill}
            id="menu-btn"
            ref={openRef}
            className="flex hamburger focus:outline-none bg-[#E0E0E0] p-8 md:p-6 rounded-lg md:hidden"
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
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
      <div ref={flexRef} className="hidden md:hidden">
        <div className="animate__animated animate__slideInRight absolute z-20 flex flex-col items-start pt-5 ps-8 space-y-5 font-bold  sm:w-auto sm:self-center top-0 left-60 right-0 bottom-0 bg-[#222F3E] text-white">
          <div className="flex space-x-2 items-center py-4 border-b-[0.5px] border-b-[#5c5656]">
            <img src={Logo} alt="" />
            <span className="font-[700] text-2xl">Connect Mi</span>
          </div>
          <Link
            className="text-xl flex space-x-3 items-center"
            onClick={skrill}
            to={"/"}
          >
            <span>
              <FaHome />
            </span>
            <span>Home</span>
          </Link>
          <Link
            className="text-xl flex space-x-3 items-center"
            onClick={skrill}
            to={"/products"}
          >
            <span>
              <BsBoxSeam />
            </span>
            <span>Products</span>
          </Link>
          <Link
            className="text-xl flex space-x-3 items-center"
            onClick={skrill}
            to={"/services"}
          >
            <span>
              <PiHandCoins />
            </span>
            <span>Services</span>
          </Link>
          <Link
            className="text-xl flex space-x-3 items-center"
            onClick={skrill}
            to={"/wishlist"}
          >
            <span>
              <MdFavoriteBorder />
            </span>
            <span>WishList</span>
          </Link>
          <Link
            className="text-xl flex space-x-3 items-center"
            onClick={skrill}
            to={"/search"}
          >
            <span>
              <TbClipboardList />
            </span>
            <span>My Items</span>
          </Link>
          <Link
            className="text-xl flex space-x-3 items-center pt-10"
            onClick={skrill}
            to={"/support"}
          >
            <span>
              <BiSupport />
            </span>
            <span>Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
