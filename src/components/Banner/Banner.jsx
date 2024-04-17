import { CiLocationOn } from "react-icons/ci";
import bannerTextImg from "../../assets/images/banner-text.jpg";
import bannerFloat from "../../assets/images/bannerFloat.jpg";
import Slider from "../Slider/Slider";

const Banner = () => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      {/* title */}
      <div className="text-center md:text-left" data-aos="fade-zoom-in" data-aos-delay="100" data-aos-duration="1000">
        <p className="text-primary-color text-sm md:text-base uppercase mb-1">Welcome to Dwellify</p>
        <div className="text-4xl md:text-[3.1rem] lg:text-[3.5rem] xl:text-6xl leading-tight text-black font-semibold uppercase">
          <h1>
            Connecting You with <span className="lg:hidden">Exceptional Residences</span>
          </h1>
          <div className="hidden lg:flex lg:items-center lg:gap-4 mt-3">
            <div className="w-[7.25rem] xl:w-60 h-16 hidden lg:inline-block">
              <img className="size-full rounded-full object-cover" src={bannerTextImg} />
            </div>
            <h1>Exceptional Residences</h1>
          </div>
        </div>
      </div>

      <div className="relative hidden md:block">
        <div
          className="bg-white absolute top-32 -left-8 z-10 max-w-40 min-h-32 lg:max-w-[13.125rem] lg:min-h-[11.25rem] shadow-2xl rounded-3xl p-3"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1000"
        >
          <div>
            <img className="size-full object-cover rounded-xl" src={bannerFloat} alt="Single-family home" />
          </div>
          <div className="mt-2">
            <h6 className="font-semibold">Single-family home</h6>
            <p className="flex gap-1 items-center">
              <CiLocationOn /> Canada
            </p>
          </div>
        </div>
      </div>

      {/* slider */}
      <div className="mt-14" data-aos="fade-zoom-in" data-aos-delay="200" data-aos-duration="1000">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Banner;
