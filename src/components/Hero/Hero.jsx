import React from "react";
import HeroContent from "./HeroContent";
import HeroDivider from "./HeroDivider";
import AnimatedArrow from "../Ui/AnimatedArrow";

const Hero = () => {
  return (
    <section
      aria-label="Hero section - Introduction and latest posts"
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url("/images/hero-bg.png")',
      }}
    >
      {/* Hidden image for SEO and screen reader support */}
      <img
        src="/images/hero-bg.png"
        alt="Abstract coding background"
        className="sr-only"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Main Content */}
      <HeroContent />

      {/* Decorative Divider */}
      <HeroDivider />

      {/* Scroll Arrow */}
      <AnimatedArrow />
    </section>
  );
};

export default Hero;
