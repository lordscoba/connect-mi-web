import { borderRectangle, borderRectangle2 } from "../../../images";

const Discount = () => {
  return (
    <div
      className="flex flex-row bg-no-repeat bg-cover bg-center text-white justify-between rounded-md"
      style={{ backgroundImage: `url(${borderRectangle})` }}
    >
      <div
        className="flex flex-col bg-no-repeat bg-cover bg-right p-4 md:p-6 w-2/3 md:w-4/5 space-y-2 rounded-l-md"
        style={{ backgroundImage: `url(${borderRectangle2})` }}
      >
        <div className="font-[600] md:text-xl">
          Super discount on more than 100 USD
        </div>
        <div className="text-sm">
          Have you ever finally just write dummy info
        </div>
      </div>
      <div className="p-4 md:p-6">
        <button className="bg-[#FF9017] p-3 rounded-md">Shop now</button>
      </div>
    </div>
  );
};

export default Discount;
