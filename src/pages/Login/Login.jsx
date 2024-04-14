import { Helmet } from "react-helmet-async";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { MdEmail, MdOutlineKey } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../../assets/images/login-img.jpg";

const Login = () => {
  return (
    <div className="flex gap-10 mt-10 justify-evenly items-center">
      <Helmet>
        <title>Login | Dwellify</title>
      </Helmet>
      {/* login form */}
      <div className="text-center sm:min-h-[80vh] lg:min-h-0 sm:flex lg:block justify-center items-center">
        <div className="w-fit mx-auto" data-aos="fade-right" data-aos-duration="1000">
          <h4 className="text-4xl font-bold">
            Welcome <span className="text-secondary-color">Back</span>👏
          </h4>
          <p className="text-lg font-medium mt-2 text-slate-600">Please Login to continue!</p>
          <div className="mt-8 flex gap-4 flex-col justify-center items-center">
            {/* google login */}
            <button className="btn h-auto w-full mx-auto min-h-0 btn-ghost text-base border-2 border-[#c1c8d0] rounded-full py-3 px-10 hover:border-[#c1c8d0] hover:bg-gray-200">
              <AiFillGoogleCircle className="text-xl" />
              Log In with Google
            </button>

            {/* github login */}
            <button className="btn h-auto w-full mx-auto min-h-0 btn-ghost text-base border-2 border-[#c1c8d0] rounded-full py-3 px-10 hover:border-[#c1c8d0] hover:bg-gray-200">
              <AiFillGithub className="text-xl" />
              Log In with Github
            </button>
          </div>

          <div className="flex items-center w-full mx-auto my-6">
            <hr className="w-full border-b-2 border-b-gray-300" />
            <p className="px-3 text-gray-500">OR</p>
            <hr className="w-full border-b-2 border-b-gray-300" />
          </div>

          {/* login form */}
          <form>
            {/* email */}
            <div className="w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdEmail className="text-xl" />
              <input type="email" placeholder="Email" className="bg-transparent text-primary-color outline-none" required />
            </div>

            {/* password */}
            <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdOutlineKey className="text-xl" />
              <input type="password" placeholder="Password" className="bg-transparent text-primary-color outline-none" required />
            </div>

            {/* submit button */}
            <input
              type="submit"
              value="Log In"
              className="w-full mx-auto mt-6 btn h-auto min-h-0 bg-primary-color hover:bg-[#474747] text-white text-base rounded-full py-3 px-10"
            />
          </form>

          <p className="text-slate-500 mt-5">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-black font-bold underline opacity-90">
              Register
            </Link>
          </p>
        </div>
      </div>
      {/* image */}
      <div className="hidden lg:block" data-aos="fade-left" data-aos-duration="1000">
        <div>
          <img className="rounded-3xl max-h-[600px] brightness-75" src={image} alt="House" />
        </div>
      </div>
    </div>
  );
};

export default Login;
