import "animate.css";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="w-full min-h-fit h-screen p-20 font-poppins text-black">
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <div className="h-full text-center flex flex-col justify-center" data-aos="fade-zoom-in" data-aos-duration="500">
        <div>
          <h1 className="text-9xl">404</h1>
          <h4 className="text-5xl font-light mt-4 animate__animated animate__tada">Oops!</h4>
          <p className="text-lg font-medium max-w-96 mx-auto mt-5 mb-3">
            Looks like something went wrong and the page you are looking for can&apos;t be found.
          </p>
          <Link to="/" className="btn h-auto px-7 py-5 bg-black text-white hover:bg-black hover:text-white hover:scale-105">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
