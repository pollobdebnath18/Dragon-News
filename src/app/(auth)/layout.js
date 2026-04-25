import Navbar from "@/components/shared/Navbar";
import React from "react";
import { lobstar } from "../layout";

const AuthLayOut = ({ children }) => {
  return (
    <div className={`${lobstar.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayOut;
