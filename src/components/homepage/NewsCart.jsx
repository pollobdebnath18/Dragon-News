import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

const NewsCart = ({ news }) => {
  // console.log(news);
  
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
        <div className="card-actions justify-between items-center">
          <div className="flex items-center justify-between gap-4">
            <h2 className="flex items-center gap-1 text-lg">
              <FcRating />
              {news.rating.number}
            </h2>
            <h2 className="flex items-center gap-1 text-lg">
              <FaRegEyeSlash className="text-black font-bold" />
              {news.total_view}
            </h2>
          </div>
          <Link href={`/news/${news._id}`}>
            <button className="btn btn-primary">See Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCart;
