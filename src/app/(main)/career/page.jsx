

import AboutButton from "@/components/homepage/AboutButton";
import React from "react";
import { FaReact } from "react-icons/fa";

export const metadata = {
  title: "Dragon News-Career",
};

const page = () => {
  return (
    <div className="mt-10 mb-5 bg-gray- flex items-center justify-center px-4">
      <div className="max-w-2xl bg-base-100 shadow-xl rounded-2xl p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4 text-blue-500">
          <FaReact size={60} />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold mb-3">Build Your Career With Us</h1>

        {/* Description */}
        <p className="text-base-content/70 leading-relaxed mb-6">
          Join our team and grow your skills in modern web development. We work
          with cutting-edge technologies like React, Next.js, and Tailwind CSS.
          You will collaborate with talented developers and designers. We
          believe in learning, innovation, and teamwork. Build real-world
          projects that make an impact. Start your journey and shape the future
          of tech with us.
        </p>

        {/* Button */}
        <AboutButton props={'career'}></AboutButton>
      </div>
    </div>
  );
};

export default page;
