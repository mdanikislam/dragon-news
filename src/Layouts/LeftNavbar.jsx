
import { useEffect, useState } from "react";

const LeftNavbar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log(error));
  }, []);
  return (
    /*         {
"category_id": "01",
"category_name": "Breaking News"
}, */
    <div>
      <h2 className="font-bol pb-2">News Categories {categories.length}</h2>
      <div className="flex flex-col gap-3">
        {
            categories.map(category=> <button className="btn" key={category.category_id}>{category.category_name}</button>)
        }
      </div>
    </div>
  );
};

export default LeftNavbar;
