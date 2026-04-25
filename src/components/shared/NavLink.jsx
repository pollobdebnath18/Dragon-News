'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href,children}) => {
    const pathName = usePathname();
    // console.log(pathName)
    return (
        <div>
            <Link href={href} className={`${pathName === href?"text-primary border-b-2 pb-1 border-purple-500":""}`}>{children}</Link>
        </div>
    );
};

export default NavLink;