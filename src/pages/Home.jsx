import React from "react";
import Hero from "../components/Hero/Hero";
import FeatureStats from "../components/FeatureStats";
import LatestPost from "../components/LatestPost";

function Home() {
  return (
    <>
      <Hero />
      <FeatureStats />
      <LatestPost />
    </>
  );
}

export default Home;
