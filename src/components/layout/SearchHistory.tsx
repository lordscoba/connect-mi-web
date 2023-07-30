import { RecommendedComponents } from "../user/home";

const SeachHistory = () => {
  return (
    <div className="space-y-4">
      <div className="font-bold">Your Search History</div>
      <div className="flex  space-x-3 w-full  overflow-x-auto whitespace-nowrap">
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
      </div>
    </div>
  );
};

export default SeachHistory;
