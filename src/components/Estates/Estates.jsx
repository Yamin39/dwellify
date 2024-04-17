import PropTypes from "prop-types";
import EstateCard from "../EstateCard/EstateCard";

const Estates = ({ estates }) => {
  return (
    <div className="my-12 sm:my-14 md:my-16">
      <div className="text-center" data-aos="fade-zoom-in" data-aos-duration="1000">
        <h1 className="text-4xl md:text-5xl font-bold">Estates</h1>
        <p className="max-w-[37.5rem] mx-auto text-sm md:text-base mt-2 text-slate-600">
          Explore exquisite residential properties in our Estates section at Dwellify, offering various homes and living spaces for discerning buyers.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10">
        {estates.map((estate) => (
          <EstateCard key={estate.id} estate={estate}></EstateCard>
        ))}
      </div>
    </div>
  );
};

Estates.propTypes = {
  estates: PropTypes.array,
};

export default Estates;
