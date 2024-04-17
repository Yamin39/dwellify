import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Estates from "../../components/Estates/Estates";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Home | Dwellify</title>
      </Helmet>
      <Banner></Banner>
      <Estates estates={estates}></Estates>
    </div>
  );
};

export default Home;
