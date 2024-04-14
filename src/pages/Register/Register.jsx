import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaUser } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { MdEmail, MdInsertPhoto, MdOutlineKey } from "react-icons/md";
import { Link } from "react-router-dom";
import image from "../../assets/images/register-img.jpg";

const Register = () => {
  // Password Show / Hide Toggle
  const [passToggle, setPassToggle] = useState(false);

  return (
    <div className="flex gap-10 mt-10 justify-evenly items-center">
      <Helmet>
        <title>Register | Dwellify</title>
      </Helmet>
      {/* image */}
      <div className="hidden lg:block" data-aos="fade-right" data-aos-duration="1000">
        <div>
          <img className="rounded-3xl max-h-[600px] brightness-75" src={image} alt="House" />
        </div>
      </div>

      {/* login form */}
      <div className="text-center sm:min-h-[80vh] lg:min-h-0 sm:flex lg:block justify-center items-center">
        <div className="w-full lg:w-[115%] mx-auto" data-aos="fade-left" data-aos-duration="1000">
          <h4 className="text-4xl font-bold">Register</h4>
          <p className="text-lg font-medium mt-2 mb-8 text-slate-600">Create your account!</p>

          <form>
            {/* name */}
            <div className="w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <FaUser className="text-xl" />
              <input type="text" placeholder="Name" className="bg-transparent text-primary-color outline-none" required />
            </div>

            {/* photoURL */}
            <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdInsertPhoto className="text-xl" />
              <input type="text" placeholder="Photo URL" className="bg-transparent text-primary-color outline-none" required />
            </div>

            {/* email */}
            <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdEmail className="text-xl" />
              <input type="email" placeholder="Email" className="bg-transparent text-primary-color outline-none" required />
            </div>

            {/* password */}
            <div className="mt-4 w-full mx-auto flex justify-between items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-6">
              <div className="flex gap-3 items-center">
                <MdOutlineKey className="text-xl" />
                <input type={passToggle ? "text" : "password"} placeholder="Password" className="bg-transparent text-primary-color outline-none" required />
              </div>
              <div onClick={() => setPassToggle(!passToggle)} className="text-[1.4rem] cursor-pointer">
                {passToggle ? <IoEyeSharp /> : <IoEyeOffSharp />}
              </div>
            </div>

            {/* submit button */}
            <input
              type="submit"
              value="Register"
              className="w-full mx-auto mt-6 btn h-auto min-h-0 bg-primary-color hover:bg-[#474747] text-white text-base rounded-full py-3 px-10"
            />
          </form>

          <p className="text-slate-500 mt-5">
            Already have an account?{" "}
            <Link to="/login" className="text-black font-bold underline opacity-90">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
