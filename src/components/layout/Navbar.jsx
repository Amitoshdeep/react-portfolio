import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { navItems } from "@/constants/navItems.js";

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [activeSection, setActiveSection] = useState("home");

  const HEADER_OFFSET = 80; // adjust if navbar is taller

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    const top = section.offsetTop - HEADER_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // ⭐ MANUAL SCROLLSPY — always works
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      let current = activeSection;

      for (const item of navItems) {
        const el = document.getElementById(item.scroll);
        if (!el) continue;

        const sectionTop = el.offsetTop - HEADER_OFFSET - 20;

        if (window.scrollY >= sectionTop) {
          current = item.scroll;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div
      className={`sticky top-0 flex items-center justify-center gap-10 p-4
      z-[999] text-xl duration-300 backdrop-blur-sm
      ${isHome ? "mix-blend-difference bg-black text-white" : ""}
    `}
    >
      {navItems.map((item, index) => {
        const active = isHome ? activeSection === item.scroll : undefined;

        if (isHome) {
          return (
            <button
              key={index}
              onClick={(e) => smoothScroll(e, item.scroll)}
              className="duration-300 font-semibold relative hover:scale-110"
            >
              <span className={`${active ? "" : "opacity-50"}`}>
                {item.name}
              </span>
              <div
                className={`
                  absolute bottom-0 left-0 h-[1px] bg-current duration-300
                  ${active ? "w-1/2" : "w-0"}
                `}
              ></div>
            </button>
          );
        }

        return (
          <NavLink
            key={index}
            to={item.path}
            className="duration-300 font-semibold relative hover:scale-110"
          >
            {({ isActive }) => (
              <>
                <span className={`${isActive ? "" : "opacity-50"}`}>
                  {item.name}
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
        );
      })}
    </div>
  );
}

export default Navbar;
