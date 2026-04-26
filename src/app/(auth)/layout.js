import Navbar from "@/components/shared/Navbar";
import React from "react";
import { lobstar, openSans, playfair } from "../layout";

const AuthLayOut = ({ children }) => {
  return (
    <div className={`${openSans.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayOut;
