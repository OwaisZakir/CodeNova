import React, { useRef } from "react";
import { useGSAP } from "@gsap/react"; // Import the GSAP hook
import gsap from "gsap";
import { ArrowDownCircle } from "lucide-react"; // Import the ArrowDownCircle icon from lucide-react

const HeroContent = () => {
  const headingRef = useRef();
  const paragraphRef = useRef();
  const buttonRef = useRef();

  // GSAP animation using useGSAP hook
  useGSAP(() => {
    gsap.from(headingRef.current, {
      opacity: 0,
      y: -50,
      duration: 1.2,
      ease: "power3.out",
    });

    gsap.from(paragraphRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.2,
    });

    gsap.from(buttonRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.4,
    });
  }, []); // Empty dependency array to run the animation on component mount

  // Scroll to the next section on button click
  const handleScrollToNext = () => {
    const nextSection = document.getElementById("latest-posts");
    nextSection.scrollIntoView({ behavior: "smooth" });
  };

  // GSAP animation for button mouse enter
  const handleMouseEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1, // Slightly scale up the button
      boxShadow: "0 4px 20px rgba(0, 255, 255, 0.4)", // Add shadow
      duration: 0.3, // Duration of the animation
      ease: "power2.out", // Easing effect
    });
  };

  // GSAP animation for button mouse leave
  const handleMouseLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1, // Reset the scale
      boxShadow: "none", // Remove shadow
      duration: 0.3, // Duration of the animation
      ease: "power2.out", // Easing effect
    });
  };

  return (
    <div className="absolute -mt-20 md:-mt-14 inset-0 flex flex-col justify-center items-center text-center text-gray-100 px-6">
      <h1
        ref={headingRef}
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-wide drop-shadow-lg"
      >
        Elevate Your <span className="text-yellow-500">Coding</span>{" "}
        <span className="text-cyan-400">Journey</span>
      </h1>

      <p
        ref={paragraphRef}
        className="text-base md:text-lg lg:text-xl mb-8 max-w-2xl md:max-w-3xl mx-auto opacity-90"
      >
        Dive into a world of insightful articles, hands-on tutorials, and
        resources crafted to elevate your development skills.{" "}
        <span className="text-cyan-500 font-semibold">My</span> mission is to
        help you grow.
      </p>

      {/* Button with Lucide ArrowDownCircle Icon */}
      <a
        ref={buttonRef}
        onClick={handleScrollToNext}
        onMouseEnter={handleMouseEnter} // Trigger animation on mouse enter
        onMouseLeave={handleMouseLeave} // Reset animation on mouse leave
        className="flex bg-cyan-400 text-gray-100 py-3 px-8 rounded-lg text-lg md:text-xl font-semibold cursor-pointer hover:shadow-xl transform transition duration-300"
      >
        <ArrowDownCircle size={24} className="mr-2" /> Explore Latest Posts
      </a>
    </div>
  );
};

export default HeroContent;
