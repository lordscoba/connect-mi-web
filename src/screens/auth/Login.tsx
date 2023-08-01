import { Footer } from "../../components/layout";
import { LoginBody } from "../../components/user/auth/login";

const Login = () => {
  return (
    <div className="bg-[#F4F4F4] overflow-x-hidden">
      <div className="space-y-4 p-3 md:p-7">
        <LoginBody />
      </div>
      <Footer />
    </div>
  );
};

export default Login;
