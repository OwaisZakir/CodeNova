import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const AnimatedArrow = () => {
  const spansRef = useRef([]);

  useGSAP(() => {
    spansRef.current.forEach((span, i) => {
      gsap.fromTo(
        span,
        { opacity: 0, y: -10 },
        {
          opacity: 1,
          y: 0,
          rotate: 45,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: i * 0.2,
        }
      );
    });
  }, []);

  return (
    <a
      href="#latest-posts"
      aria-label="Scroll to latest posts"
      className="absolute left-1/2 transform -translate-x-1/2 bottom-24 sm:bottom-32 md:bottom-36 lg:bottom-40 flex items-center justify-center"
    >
      <div
        className="flex flex-col items-center justify-center"
        aria-hidden="true"
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            ref={(el) => (spansRef.current[i] = el)}
            className="w-4 h-4 sm:w-5 sm:h-5 border-r-2 border-b-2 border-white rotate-45 -m-2 block"
          ></span>
        ))}
      </div>
    </a>
  );
};

export default AnimatedArrow;
