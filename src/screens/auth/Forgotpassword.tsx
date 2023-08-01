import { Footer } from "../../components/layout";
import { ForgotPasswordBody } from "../../components/user/auth/forgotpassword";

const Forgotpassword = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <div className="space-y-4 p-3 md:p-7">
        <ForgotPasswordBody />
      </div>
      <Footer />
    </div>
  );
};

export default Forgotpassword;
