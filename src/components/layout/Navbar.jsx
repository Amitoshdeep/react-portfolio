import React from 'react'
import { NavLink } from 'react-router-dom'

import {navItems} from '@/constants/navItems.js';

function Navbar() {
  return (
    <div
    className='sticky top-0 flex items-center justify-center
    gap-10 p-4 z-[999] text-xl mix-blend-difference bg-black text-white
    '>

      {/* NavLinks */}
      {navItems.map((items, index) => (
        <NavLink
          key={index}
          to={items.path}
          className="duration-300 font-semibold relative hover:scale-110"
        >
          {({ isActive }) => (
            <>
              {/* Name */}
              <span className={` mix-blend-difference ${isActive ? "" : "text-white/50"}`}>
                {items.name}
              </span>

              {/* Underline */}
              <div
                className={`
                  absolute bottom-0 left-0 h-[1px] bg-white duration-300
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

export default Navbar
