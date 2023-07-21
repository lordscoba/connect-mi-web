import { IconContext } from "react-icons";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Products } from "../../../data/productsData";
import { Slippers } from "../../../images/products";

const Hproducts = () => {
  const limitedProductArray = Products.slice(0, 4);
  return (
    <div className="space-y-4">
      <div className="">Services</div>
      <div className="flex space-x-5">
        <Link className="bg-[#222F3E] p-2 rounded-md text-white" to={""}>
          All
        </Link>
        {limitedProductArray.map((value) => {
          return (
            <Link className="bg-[#E0E0E0] p-2 rounded-md" to={""}>
              {value.product}
            </Link>
          );
        })}
        <Link className="bg-[#E0E0E0] p-2 rounded-md" to={""}>
          ...More Items
        </Link>
      </div>
      <div className="bg-white p-5">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <div className="flex w-full space-x-4 justify-end p-3">
          <Link to={""}>
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <AiOutlineLeft />
            </IconContext.Provider>
          </Link>
          <Link to={""}>
            <IconContext.Provider value={{ size: "1.5rem" }}>
              <AiOutlineRight />
            </IconContext.Provider>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="flex flex-col">
      <img className="rounded-xl" src={Slippers} alt="" />
      <div className="whitespace-pre-wrap">
        Daiwa-Sandals Men's Outdoor Fishing, Beach Shoes, Non-Slip, Wear...
      </div>
      <div className="flex items-center space-x-2">
        <div className="">$30.56</div>
        <IconContext.Provider value={{ color: "#EE8625" }}>
          <AiFillStar />
        </IconContext.Provider>
        <div className="">(4/5)</div>
      </div>
    </div>
  );
};

export default Hproducts;