import React from "react";
import Marquee from "react-fast-marquee";

const newsData = [
  { id: 1, title: "AI is Changing the Future of Web Development" },
  { id: 2, title: "Next.js 16 Released with New Performance Boost" },
  { id: 3, title: "Global Stock Markets Show Positive Growth" },
  { id: 4, title: "Cricket World Cup Preparations Begin" },
  { id: 5, title: "Climate Change Awareness Increases Worldwide" },
  { id: 6, title: "New Smartphone Launch Breaks Sales Records" },
  { id: 7, title: "SpaceX Successfully Tests Next-Gen Rocket" },
  { id: 8, title: "Education System Shifts Toward AI Learning Tools" },
];

const BreakingNews = () => {
  return (
    <div
      className="flex justify-between items-center gap-4 py-2
         px-3 bg-gray-400 max-w-[1200px] mx-auto"
    >
      <button className="btn bg-red-500 text-white">Latest</button>
      <Marquee className="text-white" pauseOnHover={true}>
        {newsData.map((n) => {
          return (
            <span key={n.id} className="mx-10">
              {n.title}
            </span>
          );
        })}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
