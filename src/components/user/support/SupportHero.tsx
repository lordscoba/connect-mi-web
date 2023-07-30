import { IconContext } from "react-icons";
import { BiSearch } from "react-icons/bi";
import { supportBg } from "../../../images";
import { Logo } from "../../../images/logo";

const SupportHero = () => {
  return (
    <div
      className="flex flex-col bg-no-repeat bg-cover bg-center h-[80vh] p-3"
      style={{ backgroundImage: `url(${supportBg})` }}
    >
      <div className="flex space-x-4 items-center">
        <img src={Logo} alt="" />
        <div className="text-[#222F3E] font-[700]">Connect Mi</div>
        <div className="text-[#222F3E] font-[700] text-[27px]">Help Center</div>
      </div>
      <div className="flex my-auto self-center bg-[#ffffff] w-5/6 md:w-2/5 items-center p-2 justify-around border-2 border-black rounded-xl">
        <IconContext.Provider value={{ size: "2rem" }}>
          <BiSearch />
        </IconContext.Provider>
        <input
          className="border-none outline-none shadow-none py-2 w-2/3"
          type="text"
          name=""
          id=""
          placeholder="Enter question or keyword example shipping"
        />
        <button className="bg-[#222F3E] px-4 py-2 text-white rounded-xl">
          search
        </button>
      </div>
    </div>
  );
};

export default SupportHero;
