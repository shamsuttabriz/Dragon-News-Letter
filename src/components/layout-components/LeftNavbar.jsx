import { useEffect, useState } from "react";

export default function LeftNavbar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category));
  }, []);

  return (
    <div>
      <h2 className="font-semibold mb-4">All Categories</h2>
      <div className="flex flex-col gap-1">
        {categories.map((category) => (
          <button className="btn rounded-sm" key={category.category_id}>
            {category.category_name}
          </button>
        ))}
      </div>
    </div>
  );
}