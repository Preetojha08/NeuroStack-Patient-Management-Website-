import React, { useState, useEffect } from "react";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import HomePage from "../assets/HomePage.png";
import brainsides from "../assets/brainsides.mp4";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-16 flex-grow">
        {/* Left Side - Tagline */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Diverse Minds, One Vision 🧠🚀
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Transforming ideas into reality with cutting-edge technology.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-teal-600 text-white rounded-lg text-lg font-semibold shadow-md hover:bg-teal-700 transition">
            Discover Our Solutions
            </button>
          </div>
        </div>

        {/* Right Side - Large Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <video
            src={brainsides}
            autoPlay
            loop
            muted
            playsInline
            className="w-full md:w-[80%] lg:w-[680px] max-h-[800px] object-cover  block"
            style={{ willChange: "transform", transform: "translateZ(0)" }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
