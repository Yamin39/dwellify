import PropTypes from "prop-types";
import { BiCategoryAlt } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import { LuPencilRuler } from "react-icons/lu";
import { Link } from "react-router-dom";

const EstateCard = ({ estate }) => {
  const { id, image, status, price, area, segment_name, estate_title, estate_location, rent_per } = estate;
  return (
    <div
      className="border border-[#b6b6b6] rounded-3xl p-4 flex flex-col justify-between"
      data-aos="fade-zoom-in"
      data-aos-delay={window.innerWidth > 1024 ? id : 50}
      data-aos-duration="1000"
    >
      <div className="relative">
        <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
          <img className="size-full object-cover rounded-2xl" src={image} alt={estate_title} />
        </div>
        <p className="absolute top-4 right-4 bg-secondary-color px-5 py-2 rounded-xl text-lg text-white font-medium">{status}</p>
      </div>

      <div className="flex justify-between items-center gap-2 flex-wrap mt-4">
        <h6 className="text-xl text-secondary-color font-semibold">
          {price}
          {rent_per && <span className="text-slate-600 text-sm">{rent_per}</span>}
        </h6>
        <div className="flex items-center gap-2 py-1">
          <LuPencilRuler />
          <p>{area}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 py-1">
        <BiCategoryAlt />
        <p>{segment_name}</p>
      </div>

      <div className="flex items-center gap-2 py-1">
        <GrLocation />
        <p>{estate_location}</p>
      </div>

      <h1 className="font-bold text-2xl mt-2">{estate_title}</h1>

      <hr className="border-b border-b-[#b6b6b6] my-5" />

      <Link to={`/estate-details/${id}`} className="btn text-base text-white bg-primary-color hover:bg-gray-700 border-[#13131349] rounded-full">
        View Property
      </Link>
    </div>
  );
};

EstateCard.propTypes = {
  estate: PropTypes.object,
};

export default EstateCard;
