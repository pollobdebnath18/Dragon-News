import Image from "next/image";
import Link from "next/link";
import React from "react";
import User from "../../assets/user.png";
import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <div className="my-8 flex justify-between items-center gap-3 max-w-[1200px] mx-auto bg-gray-100 pr-4">
      <div></div>
      <ul className="flex justify-between items-center gap-3 text-gray-600 ">
        <li>
          <NavLink className={'text-white bg-purple-500 p-1 rounded-lg'} href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      <div className="flex justify-between items-center gap-2">
        <Image src={User} alt="user" width={40} height={40}></Image>
        <button>
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
