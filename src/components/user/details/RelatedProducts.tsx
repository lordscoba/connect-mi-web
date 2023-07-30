import { relatedstuff } from "../../../data/relatedProductsData";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-md space-y-1 border">
      <div className="text-[#1C1C1C] font-[600] text-xl">Related products</div>
      <div className="flex flex-row space-x-3 overflow-x-auto whitespace-nowrap items-center">
        {relatedstuff.map((stuff, i) => {
          return (
            <div className="flex flex-col p-3 space-y-2">
              <div className="">
                <img src={stuff.image} alt="" />
              </div>
              <div className="text-[#505050]">{stuff.name}</div>
              <div className="text-[#8B96A5] text-sm">{stuff.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
