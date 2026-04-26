"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, className }) => {
  const pathName = usePathname();

  const isActive = pathName === href;

  return (
    <Link
      href={href}
      className={`
        ${isActive ? "text-primary border-b-2 pb-1 border-purple-500" : ""}
        
      `}
    >
      {children}
    </Link>
  );
};

export default NavLink;
