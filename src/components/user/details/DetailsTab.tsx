import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { mayLike } from "../../../data/maylikeData";

const DetailsTab = () => {
  const [tab, setTab] = useState<string>("Tab1");
  const style: string = "border-b-2 border-black text-[#222F3E]";
  return (
    <div className="flex flex-row justify-between w-full md:space-x-7">
      <div className="bg-white p-2 border-2 rounded-md w-full md:w-2/3">
        <div className="flex space-x-2">
          <button
            onClick={() => setTab("Tab1")}
            className={`p-2 ${tab === "Tab1" ? style : "text-[#8B96A5]"}`}
          >
            Description
          </button>
          <button
            onClick={() => setTab("Tab2")}
            className={`p-2 ${tab === "Tab2" ? style : "text-[#8B96A5]"}`}
          >
            Reviews
          </button>
          <button
            onClick={() => setTab("Tab3")}
            className={`p-2 ${tab === "Tab3" ? style : "text-[#8B96A5]"}`}
          >
            Shipping
          </button>
          <button
            onClick={() => setTab("Tab4")}
            className={`p-2 ${tab === "Tab4" ? style : "text-[#8B96A5]"}`}
          >
            About seller
          </button>
        </div>
        {tab === "Tab1" ? (
          <Tab1 />
        ) : tab === "Tab2" ? (
          <Tab2 />
        ) : tab === "Tab3" ? (
          <Tab3 />
        ) : (
          <Tab4 />
        )}
      </div>
      <div className="hidden border bg-white rounded-md p-4 space-y-4 md:flex md:flex-col md:w-1/3 lg:w-2/5">
        <div className="font-[600] text-[#1C1C1C] text-xl">You may like</div>
        {mayLike.map((value, i) => {
          return (
            <div className="flex flex-row space-x-2 w-full">
              <img
                className="border rounded-md w-1/3"
                src={value.image}
                alt=""
              />
              <div className="flex flex-col">
                <div className="text-[#1C1C1C] text-md">{value.name}</div>
                <div className="text-[#8B96A5] text-sm">{value.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Tab1 = () => {
  return (
    <div className="flex flex-col p-2 space-y-2 text-[#505050]">
      <div className="">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, Quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur.{" "}
      </div>
      <div className="text-[#505050]">
        <table className="table-auto w-full md:w-2/3">
          <tbody className="">
            <tr className="">
              <td className="border p-2 bg-[#FFF0DF]">Model</td>
              <td className="border p-2">#8786867</td>
            </tr>
            <tr className="">
              <td className="border p-2 bg-[#FFF0DF]">Style</td>
              <td className="border p-2">Classic style</td>
            </tr>
            <tr className="">
              <td className="border p-2 bg-[#FFF0DF]">Certificate</td>
              <td className="border p-2">ISO-898921212</td>
            </tr>
            <tr className="">
              <td className="border p-2 bg-[#FFF0DF]">Size</td>
              <td className="border p-2">34mm x 450mm x 19mm</td>
            </tr>
            <tr className="">
              <td className="border p-2 bg-[#FFF0DF]">Memory</td>
              <td className="border p-2">36GB RAM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex flex-col space-y-3 p-3">
        <div className="flex space-x-3">
          <span className="text-2xl">
            <TiTick />
          </span>
          <span>Some great feature name here</span>
        </div>
        <div className="flex space-x-3">
          <span className="text-2xl">
            <TiTick />
          </span>
          <span>Lorem ipsum dolor sit amet, consectetur </span>
        </div>
        <div className="flex space-x-3">
          <span className="text-2xl">
            <TiTick />
          </span>
          <span>Duis aute irure dolor in reprehenderit</span>
        </div>
        <div className="flex space-x-3">
          <span className="text-2xl">
            <TiTick />
          </span>
          <span>Some great feature name here</span>
        </div>
      </div>
    </div>
  );
};

const Tab2 = () => {
  return (
    <div className="flex flex-col p-2 space-y-2 text-[#505050]">
      <div className="">
        Tab 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.{" "}
      </div>
    </div>
  );
};

const Tab3 = () => {
  return (
    <div className="flex flex-col p-2 space-y-2 text-[#505050]">
      <div className="">Tab 3</div>
    </div>
  );
};

const Tab4 = () => {
  return (
    <div className="flex flex-col p-2 space-y-2 text-[#505050]">
      <div className="">Tab 4</div>
    </div>
  );
};

export default DetailsTab;
