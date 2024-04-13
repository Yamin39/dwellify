import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import "./Slider.css";

// Swiper Slider
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Slider = () => {
  const sliders = [
    {
      slideNo: 1,
      imgURL: slide1,
    },
    {
      slideNo: 2,
      imgURL: slide2,
    },
    {
      slideNo: 3,
      imgURL: slide3,
    },
    {
      slideNo: 4,
      imgURL: slide4,
    },
  ];
  return (
    <div>
      <div className="w-full md:w-[90%] mt-4 mx-auto relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[Navigation]}
          loop="true"
          className="rounded-3xl"
        >
          {sliders.map((slider) => (
            <SwiperSlide key={slider.slideNo}>
              <div
                className="min-h-[18rem] sm:min-h-96 max-h-[22rem] sm:max-h-[40rem] h-[50vh] lg:h-[80vh] bg-no-repeat bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slider.imgURL})`,
                }}
              ></div>
            </SwiperSlide>
          ))}

          {/* button-Arrangement */}
          <div className="absolute bottom-4 left-4">
            {/* button-swiper */}
            <div className="flex gap-4 items-center justify-center">
              <div className="swiper-button-prev"></div>
              <div className="swiper-button-next"></div>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
