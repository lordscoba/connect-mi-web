import { IconContext } from "react-icons";
import { AiFillStar, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Shoe } from "../../../images/products";

const HRecommended = () => {
  return (
    <div className="space-y-4">
      <div className="">Recommended</div>

      <div className="bg-white p-5">
        <div className="flex space-x-3 w-full overflow-x-auto whitespace-nowrap">
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
          <RecommendedCard />
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

const RecommendedCard = () => {
  return (
    <div className="flex flex-col ">
      <img src={Shoe} alt="" />
      <div className="text-inherit">
        Delicious cake for breakfast and dessert
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

export default HRecommended;
