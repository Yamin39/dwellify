import PropTypes from "prop-types";
import { BsBookmark } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";

const Blog = ({ blog }) => {
  const { tags, blog_title, description, author_name, publish_date, min_read } = blog;
  return (
    <div className="px-6 py-8 bg-white rounded-2xl cursor-pointer duration-300 hover:shadow-xl flex flex-col justify-between">
      <ul className="flex flex-wrap gap-4">
        {tags.map((tag, idx) => (
          <li key={idx} className="border border-blue-600 rounded-full px-6 py-2 text-sm">
            {tag}
          </li>
        ))}
      </ul>
      <br />
      <h1 className="font-bold text-2xl">{blog_title}</h1>
      <br />
      <p className="text-gray-500">{description}</p>
      <br />
      <div className="flex gap-2 justify-between items-center">
        <div>
          <p className="font-semibold text-black text-lg">{author_name}</p>
          <ul className="flex flex-wrap gap-2">
            <li className="text-gray-500">{publish_date}</li>
            <li className="text-gray-500 flex items-center">
              <TbPointFilled className="text-xl" />
              {min_read}
            </li>
          </ul>
        </div>
        <button>
          <BsBookmark className="text-xl mr-2" />
        </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object,
};

export default Blog;
