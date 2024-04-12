import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="max-w-[1440px] w-10/12 mx-auto my-6 md:my-8">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;