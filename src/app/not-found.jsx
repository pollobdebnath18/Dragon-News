"use client";

import Link from "next/link";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center max-w-md">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-error/10 text-error p-6 rounded-full">
            <FaExclamationTriangle size={50} />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-7xl font-bold text-error mb-2">404</h1>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-3">Page Not Found</h2>

        {/* Description */}
        <p className="text-base-content/70 mb-6">
          Sorry, the page you are looking for doesn’t exist or has been moved.
          Please check the URL or return to the homepage.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="btn btn-primary btn-wide">← Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
