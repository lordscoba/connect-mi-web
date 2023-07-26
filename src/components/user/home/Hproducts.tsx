import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Products } from "../../../data/productsData";
import { Slippers } from "../../../images/products";

const Hproducts = () => {
  const limitedProductArray = Products.slice(0, 6);
  return (
    <div className="space-y-4">
      <div className="font-bold">Products</div>
      <div className="flex space-x-2 md:space-x-5 text-sm overflow-x-auto whitespace-nowrap">
        <Link
          className="bg-[#222F3E] p-2 rounded-md text-white"
          to={"/products"}
        >
          All
        </Link>
        {limitedProductArray.map((value) => {
          return (
            <Link className="bg-[#E0E0E0] p-2 rounded-md" to={""}>
              {value.product}
            </Link>
          );
        })}
        <Link className="bg-[#E0E0E0] p-2 rounded-md" to={"/search"}>
          ...More Items
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="flex flex-col bg-white p-3 rounded-xl">
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
