import { Helmet } from "react-helmet-async";
import { FaUser } from "react-icons/fa";
import { MdInsertPhoto } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useToasts from "../../hooks/useToasts";

const UpdateProfile = () => {
  const { user, updateNameAndPhoto, setProfileLoader } = useAuth();
  const { successToast, errorToast } = useToasts();

  // handling form
  const onSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateNameAndPhoto(user, name, photoURL)
      .then((res) => {
        // console.log(res);
        successToast("Profile updated successfully");
        setProfileLoader(true);
      })
      .catch((err) => {
        console.error(err);
        errorToast(err.message);
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update Profile | Dwellify</title>
      </Helmet>
      <div className="pt-8 text-center" data-aos="fade-in" data-aos-duration="1000">
        <h4 className="text-4xl font-bold">
          Hi, <span className="text-secondary-color">{user.displayName || ""}</span>!
        </h4>
        <p className="text-lg font-medium mt-2 text-slate-600">Update Your Profile</p>
      </div>
      <div className="w-fit mx-auto  mt-14 mb-10">
        <div className="bg-gray-300 rounded-full mx-auto size-40">
          <img className="size-full rounded-full object-cover" src={user.photoURL} alt="User" />
        </div>
        <p className="text-lg text-center font-medium mt-3 text-slate-600">{user.email || "Email not found"}</p>
      </div>
      <div className="max-w-[25rem] mx-auto">
        <form onSubmit={onSubmit}>
          {/* name */}
          <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
            <FaUser className="text-xl" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent w-full text-primary-color outline-none"
              defaultValue={user.displayName}
              required
            />
          </div>

          {/* photoURL */}
          <div className="mt-4 w-full mx-auto flex items-center gap-3 text-base border-2 text-[#acacac] border-[#c1c8d0] rounded-full py-3 px-4 pl-6">
            <MdInsertPhoto className="text-xl" />
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              className="bg-transparent w-full text-primary-color outline-none"
              defaultValue={user.photoURL}
              required
            />
          </div>

          {/* submit button */}
          <input
            type="submit"
            value="Save Changes"
            className="w-full mx-auto mt-6 btn h-auto min-h-0 bg-primary-color hover:bg-[#474747] text-white text-base rounded-full py-3 px-10"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
