import { Link } from "react-router-dom";

const Card = ({ post }) => (
  <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden">
    <img
      src={post.image}
      alt={`Cover for ${post.title}`}
      className="w-full h-40 object-cover sm:h-48"
    />
    <div className="p-5">
      <h3 className="text-xl font-bold text-gray-100 mb-3">{post.title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {post.description}
      </p>
      <Link
        to={`/blog/${post.id}`}
        className="text-blue-400 text-sm hover:underline"
      >
        Read More
      </Link>
    </div>
  </div>
);

export default Card;
