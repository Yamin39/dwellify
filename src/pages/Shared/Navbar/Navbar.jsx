import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
  const { user, loading, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/updateProfile">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar justify-between px-0">
      <div>
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn px-2 btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box space-y-2 w-52">
            {links}
          </ul>
        </div>
        <a href="/" className="text-[1.625rem] font-bold tracking-wider ml-2 lg:ml-0">
          DWELLIFY
        </a>
      </div>
      <div className="hidden lg:flex">
        <ul className="NavLink-container gap-6 menu menu-horizontal px-1 font-medium text-base">{links}</ul>
      </div>
      {loading ? (
        <span className="loading loading-spinner"></span>
      ) : (
        <div id="nav-right">
          {user ? (
            <div className="flex gap-3 justify-center items-center">
              <div className="bg-gray-300 rounded-full cursor-pointer tooltip tooltip-bottom" data-tip={user.displayName}>
                <img className="w-10 h-10 rounded-full object-cover" src={user.photoURL} alt="User" />
              </div>
              <button
                onClick={handleLogOut}
                className="btn h-auto min-h-0 btn-error text-base bg-secondary-color text-white rounded-full py-2 px-7  hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className="login btn h-auto min-h-0 btn-ghost text-base border border-primary-color rounded-full py-2 px-7 hover:border-primary-color hover:bg-gray-200"
            >
              Login
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
