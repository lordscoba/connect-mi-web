import { Footer } from "../../components/layout";
import { SignUpBody } from "../../components/user/auth/signup";

const Signup = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <div className="space-y-4 p-3 md:p-7">
        <SignUpBody />
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
