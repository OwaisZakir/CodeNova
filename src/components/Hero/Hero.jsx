import React from "react";
import HeroContent from "./HeroContent";
import HeroDivider from "./HeroDivider";
import AnimatedArrow from "../Ui/AnimatedArrow";

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: 'url("/images/hero-bg.png")',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none"></div>

      {/* Main Content */}
      <HeroContent />

      {/* Decorative Divider */}
      <HeroDivider />

      <AnimatedArrow />
    </section>
  );
};

export default Hero;
