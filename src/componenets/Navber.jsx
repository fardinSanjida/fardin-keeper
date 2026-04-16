import React from 'react';
import { NavLink, useLocation } from 'react-router';
import { RiHome2Line, RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    const location = useLocation();

    const isTimelineActive = location.pathname === '/timeline';
    const isStatsActive = location.pathname === '/stats';
    // Home is active if neither Timeline nor Stats is active
    const isHomeActive = !isTimelineActive && !isStatsActive;

    const activeClass = "btn bg-green-800 text-white border-0 shadow-lg scale-105";
    const inactiveClass = "btn btn-ghost border-0 text-gray-600";

    return (
        <div className="navbar bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                <a className="btn btn-ghost font-bold text-2xl tracking-tight">
                    Keen<span className='text-green-800'>Keeper</span>
                </a>
            </div>
            <div className="navbar-end gap-2">
                <NavLink 
                    to="/" 
                    className={isHomeActive ? activeClass : inactiveClass}
                >
                    <RiHome2Line className="text-lg" />
                    <span className="hidden sm:inline">Home</span>
                </NavLink>

                <NavLink 
                    to="/timeline" 
                    className={({ isActive }) => isActive ? activeClass : inactiveClass}
                >
                    <RiTimeLine className="text-lg" />
                    <span className="hidden sm:inline">Timeline</span>
                </NavLink>

                <NavLink 
                    to="/stats" 
                    className={({ isActive }) => isActive ? activeClass : inactiveClass}
                >
                    <ImStatsDots className="text-lg" />
                    <span className="hidden sm:inline">Stats</span>
                </NavLink>
                </div>

        </div>
    );
};

export default Navbar;
  