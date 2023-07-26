import { RecommendedComponents } from "../home";

const RecommendedProducts = () => {
  return (
    <div className="space-y-4">
      <div className="font-bold">Recommended Products</div>
      <div className="flex  space-x-3 w-full  overflow-x-auto whitespace-nowrap">
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
        <RecommendedComponents.RecommendedCard />
      </div>
    </div>
  );
};

export default RecommendedProducts;
