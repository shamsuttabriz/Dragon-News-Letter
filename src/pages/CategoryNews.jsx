import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

export default function CategoryNews() {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-500 text-sm mb-3">
        {news.length} News found in this category
      </p>
      <div>
        {news.map((singleNews) => (
          <NewsCard key={singleNews._id} news={singleNews} />
        ))}
      </div>
    </div>
  );
}
