import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { MdEmail, MdInsertPhoto, MdOutlineKey } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/register-img.jpg";
import useAuth from "../../hooks/useAuth";
import useToasts from "../../hooks/useToasts";

const Register = () => {
  const navigate = useNavigate();
  // Password Show / Hide Toggle
  const [passToggle, setPassToggle] = useState(false);

  // getting toasts
  const { successToast, errorToast } = useToasts();

  // getting data from AuthContext
  const { setProfileLoader, createUser, updateNameAndPhoto, setLoading } = useAuth();

  // handling form
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ name, photoURL, email, password }) => {
    // email verification
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorToast("Invalid email address");
      return;
    }

    // password verification
    if (!/[A-Z]/.test(password)) {
      errorToast("Password should contain at least an Uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      errorToast("Password should contain at least a Lowercase letter");
      return;
    }

    if (password.length < 6) {
      errorToast("Password Length must be at least 6 character");
      return;
    }

    // creating user
    createUser(email, password)
      .then((result) => {
        // console.log(result.user);
        updateNameAndPhoto(result.user, name, photoURL)
          .then((res) => {
            // console.log(res);
            successToast("Registration Successful");
            setProfileLoader(true);
            navigate("/");
          })
          .catch((err) => {
            console.error(err);
            errorToast(err.message);
          });
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
        if (/email-already-in-use/.test(error.message)) {
          errorToast("Email already in use");
        } else {
          errorToast(error.message);
        }
      });
  };

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
        <div className="w-full lg:w-[115%] mx-auto" data-aos={window.innerWidth > 1024 ? "fade-left" : "fade-zoom-in"} data-aos-duration="1000">
          <h4 className="text-4xl font-bold">Register</h4>
          <p className="text-lg font-medium mt-2 mb-8 text-slate-600">Create your account!</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* name */}
            <div className="w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <FaUser className="text-xl" />
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Name"
                className="bg-transparent w-full text-primary-color outline-none"
                required
              />
            </div>

            {/* photoURL */}
            <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdInsertPhoto className="text-xl" />
              <input
                {...register("photoURL", { required: true })}
                type="text"
                placeholder="Photo URL"
                className="bg-transparent w-full text-primary-color outline-none"
                required
              />
            </div>

            {/* email */}
            <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
              <MdEmail className="text-xl" />
              <input
                {...register("email", { required: true })}
                type="email"
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
