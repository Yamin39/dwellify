import { FaRegCopyright, FaTwitterSquare } from "react-icons/fa";
import { FaArrowRight, FaFacebook } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white mt-10 p-6 rounded-2xl">
      <div className="text-center mb-6 pt-3">
        <Link href="/" className="text-4xl font-bold tracking-wider ml-2 lg:ml-0">
          DWELLIFY
        </Link>
      </div>

      <div className="mb-10">
        <ul className="flex justify-center items-center text-2xl gap-4">
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <RiInstagramFill />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitterSquare />
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-evenly gap-16">
        <div className="max-w-[12.5rem] rounded-2xl text-center lg:text-left p-4" style={{ boxShadow: "0 0 20px #13131349" }}>
          <p className="text-slate-600 font-medium mb-3">Get our exclusive offers and updates in one tap.</p>
          <button className="btn text-base text-white bg-primary-color hover:bg-gray-700 border-[#13131349] rounded-2xl">
            Subscribe
            <FaArrowRight />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row text-center sm:text-left gap-10 sm:gap-16 lg:gap-20">
          <div>
            <h5 className="text-xl font-medium mb-2">Pages</h5>
            <ul className="text-gray-500 font-light space-y-1">
              <li className="hover:text-black">
                <a href="/">Home</a>
              </li>
              <li className="hover:text-black">
                <a href="/blogs">Blogs</a>
              </li>
              <li className="hover:text-black">
                <a href="/update-profile">Profile</a>
              </li>
              <li className="hover:text-black">
                <a href="/register">Register</a>
              </li>
              <li className="hover:text-black">
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-medium mb-2">Company</h5>
            <ul className="text-gray-500 font-light space-y-1">
              <li className="hover:text-black">
                <a href="">About</a>
              </li>
              <li className="hover:text-black">
                <a href="">Why us?</a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-xl font-medium mb-2">Support</h5>
            <ul className="text-gray-500 font-light space-y-1">
              <li className="hover:text-black">
                <a href="">Contact</a>
              </li>
              <li className="hover:text-black">
                <a href="">FAQ</a>
              </li>
              <li className="hover:text-black">
                <a href="">Guides</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center gap-2 pt-6">
        <FaRegCopyright />
        <p>Dwellify.com @2024</p>
      </div>
    </footer>
  );
};

export default Footer;
