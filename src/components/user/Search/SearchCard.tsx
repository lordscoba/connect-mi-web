import { ChangeEvent, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { PiGridFourFill, PiListFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { Product_1 } from "../../../images/list";
import {
  DropdownBrands,
  DropdownCategory,
  DropdownCondition,
  DropdownFeatures,
  DropdownPriceRange,
  DropdownProducts,
  DropdownRatings,
  DropdownServices,
} from "./DropDownSearch";

const SearchCard = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const [List, setList] = useState<boolean>(true);
  return (
    <div className="flex flex-col space-y-3 md:p-9">
      <div className="flex text-[#8B96A5] items-center space-x-1">
        <div className="">Home</div>
        <IoIosArrowForward />
        <div className="">Mobile Phones and Accessories</div>
      </div>
      <div className="flex flex-row md:space-x-5">
        <NavBarList />
        <div className="basis-full md:basis-5/6 flex flex-col space-y-3">
          <div className="w-full flex flex-row items-center justify-between bg-white p-3 rounded-md">
            <div className="">
              12,911 items in
              <span className="font-bold"> Mobile accessory</span>
            </div>
            <div className="flex space-x-4 items-center">
              <div className="flex items-center space-x-2">
                <input type="checkbox" name="" id="" />
                <span>Verified only</span>
              </div>
              <div className="border-2 p-2 rounded-md">
                <select
                  id="select-option"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="border-none"
                >
                  <option value="">Featured</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="flex space-x-4 text-3xl">
                <button
                  onClick={() => {
                    setList(false);
                  }}
                >
                  <PiGridFourFill />
                </button>
                <button
                  onClick={() => {
                    setList(true);
                  }}
                >
                  <PiListFill />
                </button>
              </div>
            </div>
          </div>
          <div
            className={`w-full ${
              !List ? "grid grid-cols-3 gap-2" : "flex flex-col space-y-3"
            }`}
          >
            <SearchListCard list={List} />
            <SearchListCard list={List} />
            <SearchListCard list={List} />
            <SearchListCard list={List} />
            <SearchListCard list={List} />
            <SearchListCard list={List} />
          </div>
          <div className="flex justify-end space-x-2 items-center pb-6">
            <div className="border-2 p-3 rounded-md bg-white">
              <select
                id="select-option"
                value={selectedOption}
                onChange={handleSelectChange}
                className="border-none"
              >
                <option value="">Show 5</option>
                <option value="option1">Show 15</option>
                <option value="option2">Show 20</option>
                <option value="option3">Show 25</option>
              </select>
            </div>
            <div className="flex text-2xl">
              <button className="border-2 bg-white p-2 rounded-md">
                <IoIosArrowBack />
              </button>
              <button className="border-none bg-inherit px-3 py-2 rounded-md">
                1
              </button>
              <button className="border-2 bg-white px-3 py-2 rounded-md">
                2
              </button>
              <button className="border-2 bg-white px-3 py-2 rounded-md">
                3
              </button>
              <button className="border-2 bg-white p-2 rounded-md">
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavBarList = () => {
  return (
    <div className="hidden md:flex flex-col md:basis-1/6">
      <DropdownCategory />
      <DropdownProducts />
      <DropdownServices />
      <DropdownBrands />
      <DropdownFeatures />
      <DropdownPriceRange />
      <DropdownCondition />
      <DropdownRatings />
    </div>
  );
};

const SearchListCard = ({ list }: any) => {
  const [Like, setLike] = useState<boolean>(true);
  const LikeClick = () => {
    if (!Like) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  return (
    <>
      {list ? (
        <div className="flex space-x-1 md:space-x-3 bg-white p-2 md:p-3 rounded-md">
          <img className="object-cover" src={Product_1} alt="" />
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <span>Canon Cmera EOS 2000, Black 10x zoom</span>
              <span
                onClick={LikeClick}
                className="text-[#FF9017] h-8 text-xl md:text-2xl border-2 p-1 rounded-md"
              >
                {Like ? <MdOutlineFavoriteBorder /> : <MdFavorite />}
              </span>
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
            <Link to={""} className="text-[#0D6EFD] text-sm">
              View details
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap space-x-1 md:space-x-3 bg-white p-2 md:p-3 rounded-md">
          <img className="object-cover w-full" src={Product_1} alt="" />
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between">
              <div className="flex flex-wrap gap-1">
                <span className="font-[600] text-sm">$998.00</span>
                <span className="text-[#8B96A5] line-through font-[700] text-sm">
                  $1128.00
                </span>
                <span className="text-[#FF9017] flex items-center space-x-2">
                  <Star /> <span className="">4.5</span>
                </span>
              </div>
              <span
                onClick={LikeClick}
                className="text-[#FF9017] h-8 text-xl md:text-2xl border-2 p-1 rounded-md"
              >
                {Like ? <MdOutlineFavoriteBorder /> : <MdFavorite />}
              </span>
            </div>
            <div className="text-[#606060]">
              Canon Cmera EOS 2000, Black 10x zoom
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const Star = () => {
  return (
    <div className="flex">
      <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar /> <AiFillStar />
    </div>
  );
};

export default SearchCard;
