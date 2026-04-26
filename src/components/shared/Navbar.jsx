"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import User from "../../assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user", isPending);
  return (
    <div className="my-8 flex justify-between items-center gap-3 max-w-[1200px] mx-auto bg-gray-100 pr-4">
      <div></div>
      <ul className="flex justify-between items-center gap-3 text-gray-600 ">
        <li>
          <NavLink
            className={"text-white bg-purple-500 p-1 rounded-lg"}
            href={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>
      {isPending ? (
        <span className="loading loading-spinner loading-xl"></span>
      ) : user ? (
        <div className="flex justify-between items-center gap-2">
          <h2 className="text-md font-bold">
            Hello , <span className="text-blue-500">{user?.name}</span>
          </h2>
          <Image
            className="rounded-full"
            src={user?.image || User}
            alt="user"
            width={40}
            height={40}
          ></Image>
          <button
            className="btn bg-purple-500 text-white"
            onClick={async () => await authClient.signOut()}
          >
            <Link href={"/login"}>LogOut</Link>
          </button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href={"/login"}>LogIn</Link>
        </button>
      )}
    </div>
  );
};

export default Navbar;
