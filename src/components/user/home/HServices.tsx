import { IconContext } from "react-icons";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Services } from "../../../data/servicesData";
import { Cake } from "../../../images/products";

const HServices = () => {
  const limitedServiceArray = Services.slice(0, 4);
  return (
    <div className="space-y-4">
      <div className="font-bold">Services</div>
      <div className="flex space-x-2 md:space-x-5 text-sm h-auto overflow-x-auto whitespace-nowrap">
        <Link
          className="bg-[#222F3E] p-2 rounded-md text-white"
          to={"/services"}
        >
          All
        </Link>
        {limitedServiceArray.map((value) => {
          return (
            <Link
              key={value.service}
              className="bg-[#E0E0E0] p-2 rounded-md"
              to={""}
            >
              {value.service}
            </Link>
          );
        })}
        <Link className="bg-[#E0E0E0] p-2 rounded-md" to={"/search"}>
          ...More Items
        </Link>
      </div>
      <div className="bg-white p-5">
        <div className="flex space-x-3 w-full overflow-x-auto whitespace-nowrap">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
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

const ServiceCard = () => {
  return (
    <div className="flex flex-col ">
      <img src={Cake} alt="" />
      <div className="">Delicious cake for breakfast and dessert</div>
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

const Scomponents = {
  HServices,
  ServiceCard,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default Scomponents;
