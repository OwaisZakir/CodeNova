import React, { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import gsap from "gsap";

const HeroDivider = () => {
  const waveRef = useRef();

  // GSAP animation using useGSAP hook
  useGSAP(() => {
    gsap.fromTo(
      waveRef.current,
      { y: 30, opacity: 0 }, // Start with the wave slightly below and invisible
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" } // Animate to original position with fade-in
    );
  }, []); // Empty dependency array to run only once on component mount

  return (
    <div
      className="absolute bottom-0 w-full overflow-hidden z-10 pointer-events-none" // Ensures no interaction with the divider
    >
      <svg
        ref={waveRef}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="w-full"
        fill="#1A202C" // Dark theme color matching your design
      >
        <path d="M0,256L48,250C96,245,192,235,288,213.3C384,192,480,160,576,154.7C672,149,768,171,864,192C960,213,1056,213,1152,192C1248,171,1344,128,1392,112L1440,96V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>
  );
};

export default HeroDivider;
