import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AiFillGithub, AiFillGoogleCircle } from "react-icons/ai";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { MdEmail, MdOutlineKey } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/images/login-img.jpg";
import useAuth from "../../hooks/useAuth";
import useToasts from "../../hooks/useToasts";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  // Password Show / Hide Toggle
  const [passToggle, setPassToggle] = useState(false);

  // getting toasts
  const { successToast, errorToast } = useToasts();

  // getting data from AuthContext
  const { logIn, logInWithGoogle, logInWithGithub } = useAuth();

  // google login
  const handleGoogle = () => {
    logInWithGoogle()
      .then((result) => {
        // console.log(result.user);
        successToast("Login Successful");
        navigate(state || "/");
      })
      .catch((error) => {
        // console.log(error)
      });
  };

  // google login
  const handleGithub = () => {
    logInWithGithub()
      .then((result) => {
        // console.log(result.user);
        successToast("Login Successful");
        navigate(state || "/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  // handling form
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ email, password }) => {
    // email verification
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorToast("Invalid email address");
      return;
    }

    // password verification
    if (password.length < 6) {
      errorToast("Password Length must be at least 6 character");
      return;
    }

    logIn(email, password)
      .then((result) => {
        // console.log(result.user);
        successToast("Login Successful");
        navigate(state || "/");
      })
      .catch((error) => {
        console.error(error.message);
        if (/invalid-credential/.test(error.message)) {
          errorToast("Wrong Email or Password");
        } else {
          errorToast(error.message);
        }
      });
  };
  return (
    <div className="flex gap-10 mt-10 justify-evenly items-center">
      <Helmet>
        <title>Login | Dwellify</title>
      </Helmet>
      <div className="text-center sm:min-h-[80vh] lg:min-h-0 sm:flex lg:block justify-center items-center">
        <div className="w-fit mx-auto" data-aos={window.innerWidth > 1024 ? "fade-right" : "fade-zoom-in"} data-aos-duration="1000">
          <h4 className="text-4xl font-bold">
            Welcome <span className="text-secondary-color">Back</span>👏
          </h4>
          <p className="text-lg font-medium mt-2 text-slate-600">Please Login to continue!</p>
          <div className="mt-8 flex gap-4 flex-col justify-center items-center">
            {/* google login */}
            <button
              onClick={handleGoogle}
              className="btn h-auto w-full mx-auto min-h-0 btn-ghost text-base border-2 border-[#c1c8d0] rounded-full py-3 px-10 hover:border-[#c1c8d0] hover:bg-gray-200"
            >
              <AiFillGoogleCircle className="text-xl" />
              Log In with Google
            </button>

            {/* github login */}
            <button
              onClick={handleGithub}
              className="btn h-auto w-full mx-auto min-h-0 btn-ghost text-base border-2 border-[#c1c8d0] rounded-full py-3 px-10 hover:border-[#c1c8d0] hover:bg-gray-200"
            >
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
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* email */}
            <div className="w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdEmail className="text-xl" />
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="bg-transparent w-full text-primary-color outline-none"
                required
              />
            </div>

            {/* password */}
            <div className="mt-4 w-full mx-auto flex justify-between items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-6">
              <div className="flex gap-3 items-center">
                <MdOutlineKey className="text-xl" />
                <input
                  {...register("password", { required: true })}
                  type={passToggle ? "text" : "password"}
                  placeholder="Password"
                  className="bg-transparent w-full text-primary-color outline-none"
                  required
                />
              </div>
              <div onClick={() => setPassToggle(!passToggle)} className="text-[1.4rem] cursor-pointer">
                {passToggle ? <IoEyeOffSharp /> : <IoEyeSharp />}
              </div>
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
