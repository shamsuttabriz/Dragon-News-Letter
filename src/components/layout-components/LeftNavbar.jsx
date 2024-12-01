import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to={`/category/${category.category_id}`}
            className="btn rounded-sm bg-gray-50 border border-gray-300 hover:bg-gray-200"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
