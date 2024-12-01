import { FaEye, FaStar } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, details, rating, total_view } = news;

  return (
    <div className="mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden mb-6">
      {/* Author Section */}
      <div className="flex items-center gap-3 px-4 py-3 border-b bg-gray-200">
        <img
          src={author.img}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h3 className="text-sm font-medium text-gray-800">{author.name}</h3>
          <p className="text-xs text-gray-500">
            {author.published_date
              ? author.published_date.split(" ")[0]
              : "Time not found"}
          </p>
        </div>
      </div>

      {/* Title and Thumbnail */}
      <div>
        <div className="px-4 py-3">
          <h2 className="text-lg font-bold text-gray-800 leading-tight">
            {title}
          </h2>
        </div>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Details */}
      <div className="px-4 text-gray-600 text-sm leading-relaxed my-4">
        <p>{details.substring(0, 100)}...</p>
        <button className="font-semibold text-sm mt-2 text-[#FF8C47]">
          Read More
        </button>
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-between px-4 py-3 border-t bg-gray-50">
        {/* Rating */}
        <div className="flex items-center gap-1 text-[#FF8C47]">
          <FaStar className="w-4 h-4" />
          <span className="text-sm font-medium text-gray-800">
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
