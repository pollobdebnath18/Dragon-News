"use client";

import React from "react";
import { FaNewspaper } from "react-icons/fa";

const page = () => {
  return (
    <div className="mt-12 bg-base-200 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-base-100 shadow-xl rounded-2xl p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4 text-red-500">
          <FaNewspaper size={60} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">About Dragon News</h1>

        {/* Description */}
        <p className="text-base-content/70 leading-relaxed mb-6">
          Dragon News is a modern news platform built with Next.js and Tailwind
          CSS. Our goal is to deliver fast, reliable, and real-time news
          updates. We cover technology, sports, business, and global events. The
          platform is designed for smooth user experience on all devices. We
          focus on clean design and fast performance. Stay informed anytime,
          anywhere with Dragon News.
        </p>

        {/* Button */}
        <button className="btn btn-primary">Explore News</button>
      </div>
    </div>
  );
};

export default page;
