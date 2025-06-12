import React from "react";

function Hero() {
  return (
    <div className="p-3 sm:p-5 lg:p-20 mt-16 sm:mt-20 lg:mt-24" id="home">
      <div className="bg-blue-50 shadow-lg min-h-screen rounded-3xl flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-8 lg:gap-0 py-8 lg:py-0">
        <img
          src="https://loremfaces.net/256/id/2.jpg"
          alt="Profile"
          className="rounded-full border-4 border-blue-500 w-48 sm:w-64 lg:w-80 xl:w-96 flex-shrink-0 "
        />
        <div className="p-4 sm:p-8 lg:p-20 shadow-lg bg-blue-100 flex flex-col rounded-xl gap-3 w-full max-w-2xl lg:max-w-4xl mx-4 lg:mx-0 transform hover:scale-105 transition-transform duration-150 ease-in-out animate-pulse">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-blue-500 text-center lg:text-left">
            Mohammed Ansari
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-center lg:text-left">
            Full-Stack Web Developer with expertise in React, JavaScript, HTML
            for frontend development and Django, Python for backend systems.
            Experienced in building end-to-end web applications, creating
            responsive user interfaces, and developing scalable APIs. Passionate
            about delivering clean, efficient code and modern web solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
