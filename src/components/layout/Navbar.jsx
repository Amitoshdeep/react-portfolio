import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navItems } from '@/constants/navItems.js';

function Navbar() {
  const { pathname } = useLocation();

  const isHome = pathname === "/";
  const dark =
    pathname === "/about" ||
    pathname === "/contact" ||
    pathname === "/projects";

  return (
    <div
      className={`sticky top-0 flex items-center justify-center gap-10 p-4
      z-[999] text-xl duration-300 backdrop-blur-sm
      ${isHome ? "mix-blend-difference bg-black text-white" : ""}
      ${!isHome ? (dark ? "bg-black text-white" : "bg-white text-black") : ""}
    `}
    >

      {navItems.map((items, index) => (
        <NavLink
          key={index}
          to={items.path}
          className="duration-300 font-semibold relative hover:scale-110"
        >
          {({ isActive }) => (
            <>
              <span className={`${isActive ? "" : "opacity-50"}`}>
                {items.name}
              </span>

              <div
                className={`
                  absolute bottom-0 left-0 h-[1px] bg-current duration-300
                  ${isActive ? "w-1/2" : "w-0"}
                `}
              ></div>
            </>
          )}
        </NavLink>
      ))}

    </div>
  )
}

export default Navbar;
