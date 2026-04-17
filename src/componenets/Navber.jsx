import React from 'react';
import { Link, NavLink } from 'react-router';
import { RiHome5Line, RiLineChartLine, RiTimeLine } from "react-icons/ri";

const Navbar = () => {
    const navItems = [
        { to: '/', label: 'Home', icon: RiHome5Line, end: true },
        { to: '/timeline', label: 'Timeline', icon: RiTimeLine },
        { to: '/stats', label: 'Stats', icon: RiLineChartLine },
    ];

    return (
        <header className="top-0 z-40 border-b-2 border-gray-200 bg-white">
            <div className="flex w-full items-center justify-between gap-4 px-8 py-3 sm:px-10 lg:px-12">
                <Link to="/" className="shrink-0">
                    <p className="text-2xl font-bold tracking-tight text-slate-800">Keen<span className='text-green-900'>Keeper</span></p>
                </Link>

                <nav className="ml-auto flex flex-wrap items-center justify-end gap-4">
                    {navItems.map(({ to, label, icon, end }) => (
                        <NavLink
                            key={to}
                            to={to}
                            end={end}
                            className={({ isActive }) =>
                                `inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-sm font-medium transition ${
                                    isActive
                                        ? 'bg-emerald-800 text-white'
                                        : 'text-slate-500 hover:text-slate-800'
                                }`
                            }
                        >
                            {React.createElement(icon, { className: 'text-sm' })}
                            <span>{label}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
  
