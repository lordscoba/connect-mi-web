import { BlackFriday, StandingWadrobe } from "../../../images/products";

const Hslider = () => {
  return (
    <div className="flex space-x-2 p-3 bg-white rounded-2xl">
      <img className="w-2/3 rounded-2xl" src={BlackFriday} alt="" />
      <div className="bg-[#EE8625] rounded-2xl p-5 w-1/3">
        <img className="" src={StandingWadrobe} alt="" />
      </div>
    </div>
  );
};

export default Hslider;
