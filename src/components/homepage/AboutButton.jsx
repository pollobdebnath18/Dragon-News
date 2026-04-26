import Link from "next/link";
import React from "react";

const AboutButton = ({ props }) => {
  console.log(props);
  const news = props === "about" ? "Explore News" : "Explore Careere News";
  return (
    <div>
      <Link href={"/"}>
        <button className="btn btn-primary">{news}</button>
      </Link>
    </div>
  );
};

export default AboutButton;
