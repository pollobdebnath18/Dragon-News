import Link from "next/link";
import React from "react";

const Category = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-md font-bold">All catetories</h2>
      <ul className="flex flex-col gap-4 text-center">
        {categories.map((category) => {
          return (
            <li
              key={category.category_id}
              className={`text-lg  p-2 rounded-md ${activeId === category.category_id ? "bg-purple-700 text-white" : "bg-slate-200"}`}
            >
              <Link href={`/category/${category.category_id}`} className="block">
                {" "}
                {category.category_name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
