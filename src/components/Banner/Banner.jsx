import bannerTextImg from "../../assets/images/banner-text.jpg";

const Banner = () => {
  return (
    <div className="pt-12 sm:pt-14 md:pt-16">
      <div className="text-center md:text-left">
        <p className="text-primary-color text-sm md:text-base uppercase mb-1">Welcome to dwellify</p>
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
    </div>
  );
};

export default Banner;
