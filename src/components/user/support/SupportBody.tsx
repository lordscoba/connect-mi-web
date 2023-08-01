import { useState } from "react";
import { BiSupport } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SupportBody = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex flex-col items-center space-y-4 p-3">
      <div className="flex flex-wrap gap-3">
        <button className="bg-[#AFD0FF] p-3 rounded-md">Place Order</button>
        <button className="bg-[#AFD0FF] p-3 rounded-md">Track Order</button>
        <button className="bg-[#AFD0FF] p-3 rounded-md">Track Order</button>
        <button className="bg-[#AFD0FF] p-3 rounded-md">
          Return & refunds
        </button>
        <button className="bg-[#AFD0FF] p-3 rounded-md">Payment</button>
      </div>
      <div className="bg-white p-3 md:p-6 rounded-md space-y-3 w-full md:w-3/5 lg:1/2">
        <div className="flex justify-between font-[700]">
          <span>Frequently Asked Questions</span>
          <button onClick={toggleDropdown}>
            {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </button>
        </div>
        {isOpen && (
          <div className="flex flex-col space-y-2">
            <div className="">Order not received. What should I do?</div>
            <div className="">How can I check my refund status?</div>
            <div className="">What is the process to open a dispute?</div>
            <div className="">How do I cancel my order?</div>
            <div className="">
              My order has been closed. What options do I have?
            </div>
            <div className="">How can I track my package?</div>
            <div className="">
              The product I received doesn't match the description. What steps
              can I take?
            </div>
            <div className="">
              I can't find my order in my account. What should I do?
            </div>
            <div className="">How do I get in touch with the seller?</div>
          </div>
        )}
      </div>
      <div className="bg-white flex p-2 md:p-4 rounded-md space-y-3 w-full md:w-3/5 lg:1/2 justify-between">
        <div className="flex items-center text-2xl">
          <span>
            <BiSupport />
          </span>
          <span>24/7 Online support </span>
        </div>
        <button className="bg-[#36424F] p-3 rounded-md text-white">
          Chat Now
        </button>
      </div>
    </div>
  );
};

export default SupportBody;
