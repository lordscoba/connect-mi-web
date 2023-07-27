import { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Products } from "../../../data/productsData";
import { brands, condition, features1 } from "../../../data/searchData";
import { Services } from "../../../data/servicesData";

export const DropdownCategory = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Category</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            <li className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap items-center">
              Products
            </li>
            <li className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap items-center">
              Services
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownProducts = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const limitedProductArray = Products.slice(0, 4);

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Products</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            {limitedProductArray.map((value, i) => {
              return (
                <li
                  key={i}
                  className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap"
                >
                  {value.product}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownServices = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const limitedServiceArray = Services.slice(0, 4);

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Services</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            {limitedServiceArray.map((value, i) => {
              return (
                <li
                  key={i}
                  className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap"
                >
                  {value.service}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownBrands = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Brands</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            {brands.map((value, i) => {
              return (
                <li
                  key={i}
                  className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center"
                >
                  <input type="checkbox" name="" id="" />
                  <span>{value.brand}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownFeatures = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Features</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            {features1.map((value, i) => {
              return (
                <li
                  key={i}
                  className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center"
                >
                  <input type="checkbox" name="" id="" />
                  <span>{value.feature}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownPriceRange = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700] whitespace-nowrap">Price Range</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="flex flex-col z-10 text-black bg-inherit space-y-2">
          <input
            type="range"
            id="range-input"
            // value={value}
            // onChange={handleRangeChange}
            min={0}
            max={100}
            step={1}
            defaultValue={["9", "10"]}
          />
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label htmlFor="min">Min</label>
              <input
                id="min"
                className="w-full p-2 border-2 rounded-md"
                type="text"
                placeholder="0"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="max">Max</label>
              <input
                id="max"
                className="w-full p-2 border-2 rounded-md"
                type="text"
                placeholder="9999"
              />
            </div>
          </div>
          <button className="w-full bg-white p-2 text-[#ff9017] border-2 rounded-md">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export const DropdownCondition = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Condition</div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            {condition.map((value, i) => {
              return (
                <li
                  key={i}
                  className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center"
                >
                  <input type="radio" name="condition" id="" />
                  <span>{value.condition}</span>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const DropdownRatings = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col space-y-1 p-3 border-t-[1px] border-grey">
      <button
        onClick={toggleDropdown}
        className="flex flex-row items-center space-x-6 lg:space-x-36 text-black bg-inherit rounded-md focus:outline-none justify-between"
      >
        <div className="font-[700]">Ratings </div>
        {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </button>
      {isOpen && (
        <div className="z-10 text-black bg-inherit">
          <ul className="">
            <li className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center">
              <input type="checkbox" name="condition" id="" />
              <span className="text-[#FF9017] flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
            </li>
            <li className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center">
              <input type="checkbox" name="condition" id="" />
              <span className="text-[#FF9017] flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </span>
            </li>
            <li className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center">
              <input type="checkbox" name="condition" id="" />
              <span className="text-[#FF9017] flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
            </li>
            <li className=" py-2 font-[400] text-[#505050] lg:whitespace-nowrap flex space-x-3 items-center">
              <input type="checkbox" name="condition" id="" />
              <span className="text-[#FF9017] flex items-center">
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <AiOutlineStar />
                <AiOutlineStar />
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
