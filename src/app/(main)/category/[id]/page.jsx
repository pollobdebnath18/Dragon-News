import React from "react";
import Category from "@/components/homepage/Category";
import RightSide from "@/components/homepage/RightSide";
import { fetchCategoryData, fetchdata } from "@/lib/data";
import NewsCart from "@/components/homepage/NewsCart";



const CategoryDetails = async ({ params }) => {
  const { id } = await params;
  console.log(id, "iddddddd");
  const categories = await fetchdata();
  // console.log(categories);
  const news = await fetchCategoryData(id);
  console.log(news);

  return (
    <div className="grid grid-cols-12 gap-3 max-w-[1200px] mx-auto">
      <div className="col-span-3">
        <Category categories={categories} activeId={id}></Category>
      </div>
      <div className="bg-purple-200 col-span-6">
        all news
        {news.map((n) => {
          return <NewsCart key={n._id} news={n}></NewsCart>;
        })}
      </div>
      <div className=" col-span-3">
        <RightSide></RightSide>
      </div>
    </div>
  );
};

export default CategoryDetails;
