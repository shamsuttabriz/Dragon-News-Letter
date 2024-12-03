import { FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-6">
      {/* Author Section */}
      <div className="flex items-center justify-between bg-gray-200 px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="text-sm font-medium text-gray-800 capitalize">
              {author.name}
            </h3>
            <p className="text-xs text-gray-500">
              {author.published_date
                ? author.published_date?.split(" ")[0]
                : "Date Not Found"}
            </p>
          </div>
        </div>
        {/* Share Icon */}
        <button className="text-gray-600 hover:text-gray-800">
          <FaShareAlt className="w-5 h-5" />
        </button>
      </div>

      {/* Title and Thumbnail */}
      <div>
        <div className="px-4 py-3 my-2">
          <h2 className="text-lg font-bold text-gray-800 leading-tight tracking-wide">
            {title}
          </h2>
        </div>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-gray-600 text-base leading-relaxed my-3">
        <p>{details.substring(0, 100)}...</p>
        <Link
          to={`/news/${news._id}`}
          className="text-[#FF8C47] hover:underline font-semibold text-sm mt-2 "
        >
          Read More...
        </Link>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-100">
        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {/* Render stars dynamically */}
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`w-4 h-4 ${
                index < Math.round(rating.number)
                  ? "text-[#FF8C47]"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm font-medium text-gray-800 ml-1">
            {rating.number}
          </span>
        </div>

        {/* Total Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye className="w-4 h-4" />
          <span className="text-sm">{total_view} views</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
