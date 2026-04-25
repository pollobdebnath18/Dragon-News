import Image from "next/image";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsCart = ({ news }) => {
  console.log(news);
  return (
    <div className="card bg-base-100  shadow-sm">
      <div className="card-body">
        {/* author info */}
        <div className="flex justify-between items-center bg-slate-200 p-3">
          <div className="flex items-center gap-2">
            <div>
              <Image
                src={news.author?.img}
                alt="news.author?.name"
                width={45}
                height={45}
                className="rounded-full"
              ></Image>
            </div>
            <div className="">
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-gray-500 text-xs">
                {news.author?.published_date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <CiBookmark />
            <CiShare2 />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>
        <Image
          src={news.image_url}
          alt="news.name"
          width={100}
          height={100}
          className="w-full"
        ></Image>
        <p className="line-clamp-4">{news.details}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
