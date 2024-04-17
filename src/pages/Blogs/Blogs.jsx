import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import useAuth from "../../hooks/useAuth";

const Blogs = () => {
  const { user } = useAuth();
  const blogs = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Blogs | Dwellify</title>
      </Helmet>
      <div className="pb-10">
        <div className="pt-8 text-center" data-aos="fade-in" data-aos-duration="1000">
          <h4 className="text-4xl font-bold">
            Hey, <span className="text-secondary-color">{user.displayName || ""}</span>! <br />
            We Have Trending And Latest Blogs For You.
          </h4>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-14">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
