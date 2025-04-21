import React from "react";
import Hero from "../components/Hero/Hero";
import FeatureStats from "../components/FeatureStats";

function Home() {
  return (
    <>
      <Hero />
      <FeatureStats />

      <div
        id="latest-posts"
        className="home-container relative h-screen  flex justify-center items-center"
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev/svgjs"
            width="1440"
            height="560"
            preserveAspectRatio="none"
            viewBox="0 0 1440 560"
          >
            <g mask='url("#SvgjsMask1010")' fill="none">
              <path
                d="M1517.93 271.23C1337.48 271.82 1174.36 408.35 808.74 405.63 443.11 402.91 313.94-62.2 99.54-85.38"
                stroke="rgba(51,121,194,0.58)"
                stroke-width="2"
              ></path>
              <path
                d="M1622.02 170.53C1441.59 175.81 1294.25 446.1 954.19 444.93 614.12 443.76 497.51-55.82 286.35-86.97"
                stroke="rgba(51,121,194,0.58)"
                stroke-width="2"
              ></path>
              <path
                d="M1694.92 320.85C1595.5 320.58 1499.19 250.85 1303.46 250.85 1107.73 250.85 1119.95 325.08 912.01 320.85 704.07 316.62 649.76-6.03 520.55-30.49"
                stroke="rgba(51,121,194,0.58)"
                stroke-width="2"
              ></path>
              <path
                d="M1502.04 322.5C1344.15 317.13 1159.47 78.61 922.55 70.5 685.64 62.39 711.84-53.61 632.81-56.35"
                stroke="rgba(51,121,194,0.58)"
                stroke-width="2"
              ></path>
              <path
                d="M1634.94 174C1520.35 173.79 1408.44 104 1181.95 104 955.45 104 960.67 175.11 728.95 174 497.23 172.89 406.91-82.17 275.96-91.74"
                stroke="rgba(51,121,194,0.58)"
                stroke-width="2"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1010">
                <rect width="1440" height="560" fill="#ffffff"></rect>
              </mask>
            </defs>
          </svg>
        </div>
        <p className="text-2xl text-gray-700">
          Latest Posts Section Coming Soon
        </p>
      </div>
    </>
  );
}

export default Home;
