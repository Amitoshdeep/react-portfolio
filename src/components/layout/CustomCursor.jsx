import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useLocation } from "react-router-dom";

export default function CustomCursor() {
  const bigRef = useRef(null);
  const smallRef = useRef(null);
  const location = useLocation(); // 👈 detects page change

  useEffect(() => {
    const big = bigRef.current;
    const small = smallRef.current;

    let hoverables = document.querySelectorAll(".hoverable");

    // Mouse move
    const move = (e) => {
      gsap.to(big, { x: e.clientX, y: e.clientY, duration: 0.3 });
      gsap.to(small, { x: e.clientX, y: e.clientY, duration: 0.1 });
    };

    window.addEventListener("mousemove", move);

    // Hover effect
    const enter = () => {
      gsap.to(big, { scale: 6.5, duration: 0.2 });
    };
    const leave = () => {
      gsap.to(big, { scale: 1, duration: 0.2 });
    };

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });

    // Cleanup to avoid duplicates
    return () => {
      window.removeEventListener("mousemove", move);
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    };
  }, [location.pathname]);
  // 👆 runs again when you switch page → rebinds events

  return (
    <>
      <div
        ref={bigRef}
        className="fixed top-0 left-0 h-7 w-7 bg-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference"
      />
      <div
        ref={smallRef}
        className="fixed top-0 left-0 h-2 w-2 bg-white rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999] mix-blend-difference"
      />
    </>
  );
}
