import AOS from "aos";
import "aos/dist/aos.css";
import { Outlet } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import Navbar from "../pages/Shared/Navbar/Navbar";

AOS.init();

const Root = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto font-poppins text-primary-color py-6 md:py-8">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
