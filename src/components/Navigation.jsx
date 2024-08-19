import React from 'react';
import { NavLink ,useLocation} from 'react-router-dom';
import { FaTruckArrowRight } from 'react-icons/fa6';
import { IoMdPerson } from 'react-icons/io';
import { FaCalculator } from "react-icons/fa6";
import { RiLogoutCircleLine } from "react-icons/ri";
function Navigation() {
    const location = useLocation();
    const navData = [
        {
            name: 'My Moves',
            path: '/',
            icon: <FaTruckArrowRight />
        },
        {
            name: 'My Profile',
            path: '/profile',
            icon: <IoMdPerson />
        },
        {
            name: 'Get Quote',
            path: '/quote',
            icon: <FaCalculator />
        },
        {
            name: 'Logout',
            path: '/logout',
            icon: <RiLogoutCircleLine />
        }
    ];

    return (
        <div className="p-4">
            {navData.map(({ name, path, icon }) => (
                <NavLink
                    to={path}
                    key={name}
                    className={
                        `flex items-center gap-2 p-[5px] ${location?.pathname?.startsWith(path)? 'border-l-4 border-orange-500' : ''}`
                    }
                >
                    <span className="text-xl">{icon}</span> 
                    <span className="text-[16px] font-semibold">{name}</span>
                </NavLink>
            ))}
        </div>
    );
}

export default Navigation;
