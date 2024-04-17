import { Helmet } from "react-helmet-async";
import { BiCategoryAlt } from "react-icons/bi";
import { FaCircleCheck } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { LuPencilRuler } from "react-icons/lu";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
  const estates = useLoaderData();
  const { estateId } = useParams();
  const estate = estates.find((estate) => estate.id === estateId);
  console.log(estate);
  const { image, description, status, price, area, segment_name, estate_title, estate_location, rent_per, facilities } = estate;
  return (
    <div>
      <Helmet>
        <title>{estate_title} | Dwellify</title>
      </Helmet>
      <div className="mt-5">
        {/* banner */}
        <div className="relative w-full md:h-[24rem] lg:h-[27rem] xl:h-[37rem] rounded-2xl">
          <img className="size-full object-cover rounded-3xl" src={image} />
          <p className="absolute bottom-4 left-4 bg-secondary-color px-5 py-2 rounded-xl text-lg text-white font-medium">{status}</p>
        </div>
        {/* full details */}
        <div className="flex gap-6 flex-col md:flex-row justify-between items-start mt-10">
          <div className="flex-grow">
            <h1 className="text-4xl md:text-5xl font-bold">{estate_title}</h1>
            <p className="max-w-[37.5rem] mt-4 text-slate-600">{description}</p>
          </div>

          <div className="w-full md:w-[28.125rem] bg-white p-5 rounded-2xl">
            <h6 className="text-2xl text-secondary-color font-semibold">
              {price}
              {rent_per && <span className="text-slate-600 text-sm">{rent_per}</span>}
            </h6>

            <div className="my-4">
              <div title="Area" className="flex items-center gap-2 py-1">
                <LuPencilRuler />
                <p>{area}</p>
              </div>

              <div title="Segment Name" className="flex items-center gap-2 py-1">
                <BiCategoryAlt />
                <p>{segment_name}</p>
              </div>

              <div title="Estate Location" className="flex items-center gap-2 py-1">
                <GrLocation />
                <p>{estate_location}</p>
              </div>
            </div>

            {/* <button className="btn w-full text-base text-white bg-primary-color hover:bg-gray-700 border-[#13131349] rounded-2xl">
              {!rent_per ? "Buy" : "Rent"} Property
            </button> */}

            <div className="mt-5">
              <h3 className="text-2xl font-bold">Facilities</h3>
              <div className="mt-1">
                {facilities.map((facility, idx) => (
                  <div key={idx} className="flex items-center gap-2 pt-1">
                    <FaCircleCheck className="text-green-600" />
                    <p>{facility}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
