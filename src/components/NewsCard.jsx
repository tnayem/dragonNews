import { FaShareAlt, FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ singleNews }) => {
  const {
    title,
    author,
    thumbnail_url,
    details,
    rating,
    total_view,
    id
  } = singleNews;

  return (
    <div className="card bg-base-100 shadow-xl m-3">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 rounded-full">
              <img src={author.img} alt={author.name} />
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm text-gray-500">
          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-3">
        <h3 className="font-bold text-lg text-gray-800 leading-snug">
          {title}
        </h3>
      </div>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={thumbnail_url}
          alt={title}
          className="rounded-xl w-full object-cover"
        />
      </figure>

      {/* Details */}
      <div className="px-4 pb-2 text-sm text-gray-600">
        <p>
          {details.length > 200 ? details.slice(0, 200) + "..." : details}
          <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer ml-1">
            Read More
          </Link>
        </p>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center p-4 text-sm text-gray-600">
        <div className="flex items-center gap-1 text-orange-400">
          {Array.from({ length: rating.number }).map((_, i) => (
            <FaStar key={i} />
          ))}
          <span className="ml-1 text-gray-800 font-medium">
            {rating.number.toFixed(1)}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
