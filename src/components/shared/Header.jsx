import React from 'react';
import logo from '../../assets/logo.png';
import Image from 'next/image';
import { format } from "date-fns";


const Header = () => {
    return (
      <div className="text-center space-y-1">
        <Image
          src={logo}
          alt="logo"
          height={240}
          width={340}
          className="mx-auto"
        ></Image>
        <p>Journalism Without Fear or Favour</p>
        <p>{format(new Date(), "EEEE,LLLL,d,y")}</p>
      </div>
    );
};

export default Header;