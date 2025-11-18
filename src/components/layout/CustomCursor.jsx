import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const bigRef = useRef(null);
  const smallRef = useRef(null);

  useEffect(() => {
    const big = bigRef.current;
    const small = smallRef.current;

    // FOLLOW MOUSE
    const move = (e) => {
      gsap.to(small, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out",
      });

      gsap.to(big, {
        x: e.clientX,
        y: e.clientY - 1, // - 1 for a slight up... in big circle
        duration: 0.45,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    // HOVER EFFECTS
    const hoverables = document.querySelectorAll(".hoverable");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(big, {
          scale: 4.5,
          duration: 0.2,
          ease: "power3.out",
        });
      });

      el.addEventListener("mouseleave", () => {
        gsap.to(big, {
          scale: 1,
          duration: 0.2,
          ease: "power3.out",
        });
      });
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Big Lag Cursor */}
      <div
        ref={bigRef}
        className="fixed top-0 left-0 h-7 w-7 bg-white mix-blend-difference
        rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
      ></div>

      {/* Small Main cursor */}
      <div
        ref={smallRef}
        className="fixed top-0 left-0 h-2 w-2 bg-white mix-blend-difference
        rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 z-[9999]"
      ></div>
    </>
  );
}
