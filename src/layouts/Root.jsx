import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const Root = () => {
    return (
        <div className="max-w-[1440px] w-10/12 mx-auto font-poppins my-6 md:my-8">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;