"use client";
import { TypeAnimation } from "react-type-animation";
import HeroSearch from "./HeroSearch";
const Banner = () => {
  return (
    <div className=" bg-[#13293da5] bg-[url('/banner3.jpg')] bg-blend-overlay bg-cover bg-center ">
      <div className="space-y-10 flex flex-col justify-center items-center h-screen">
        {/* ============= heading ============= */}
        <h1 className="text-center mt-44 text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold text-white">
          Find Your Next Perfect <br></br>{" "}
          <TypeAnimation
            className="secondary-text-color"
            sequence={[
              "House",
              2000,
              "Apartment",
              2000,
              "Plaza",
              2000,
              "Villa",
              2000,
            ]}
            repeat={Infinity}
          />
        </h1>
        {/* ============== search ================= */}
        <HeroSearch />
      </div>
    </div>
  );
};

export default Banner;
