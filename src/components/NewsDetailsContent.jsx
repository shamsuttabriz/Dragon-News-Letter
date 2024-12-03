import { FiArrowLeft } from "react-icons/fi";
import { Link, useLoaderData } from "react-router-dom";

export default function NewsDetailsContent() {
  const data = useLoaderData();
  console.log(data.data[0]);
  const { image_url, title, details } = data.data[0];
  return (
    <div>
      <div className="card bg-base-100 border-2 p-5">
        <figure className="">
          <img src={image_url} alt="News Image" className="rounded-xl" />
        </figure>
        <div className="items-start">
          <h2 className="card-title py-4 tracking-wide leading-8">{title}</h2>
          <p className="text-justify leading-6 text-gray-600">{details}</p>
          <div className="card-actions mt-4">
            <Link
              to="/category/01"
              className="bg-[#D72050] flex items-center gap-1 py-2 px-3 text-white text-sm"
            >
              <FiArrowLeft />
              All news in this category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
