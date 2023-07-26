import { IconContext } from "react-icons";
import { AiFillStar } from "react-icons/ai";
import { Shoe } from "../../../images/products";

const HRecommended = () => {
  return (
    <div className="space-y-4">
      <div className="font-bold">Recommended</div>
      <div className="flex  space-x-3 w-full  overflow-x-auto whitespace-nowrap">
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
        <RecommendedCard />
      </div>
    </div>
  );
};

const RecommendedCard = () => {
  return (
    <div className="w-1/2 max-w-[58rem]flex flex-col bg-white p-4 rounded-xl  space-y-2">
      <img src={Shoe} alt="" />
      <div className="text-sm md:text-md whitespace-break-spaces">
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

const RecommendedComponents = {
  HRecommended,
  RecommendedCard,
};

export default RecommendedComponents;
