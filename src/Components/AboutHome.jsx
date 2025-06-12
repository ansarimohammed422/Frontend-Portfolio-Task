import React from "react";

function AboutHome() {
  return (
    <div className="py-8 lg:py-10 px-3 sm:px-5" id="about">
      <h1 className="text-center m-3 lg:m-5 text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-500">
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-12 p-4 lg:p-12">
        <div className="w-full lg:w-1/3 min-h-72 lg:h-80 bg-blue-50 rounded-3xl flex flex-col gap-3 p-4 lg:p-5 justify-center items-center shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-500 text-center">
            Mohammed Ansari
          </h1>
          <p className="text-center text-sm sm:text-base">
            Coffee-fueled developer who speaks fluent React and Python, but
            still gets excited when CSS finally cooperates. When not coding, I'm
            probably debugging something that worked perfectly fine yesterday.
            Always ready for the next challenge and a good programming meme!
          </p>
        </div>
        <div className="w-full lg:w-1/3 min-h-72 lg:h-80 bg-blue-50 rounded-3xl flex flex-col gap-3 p-4 lg:p-5 justify-center items-center shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-500 text-center">
            Frontend Technologies
          </h1>
          <p className="text-center text-sm sm:text-base">
            Master of the holy trinity: HTML for structure, CSS for making
            things pretty (and occasionally frustrating), and JavaScript for
            bringing everything to life. React enthusiast who loves turning
            complex ideas into smooth, interactive user experiences. From
            responsive layouts to dynamic components, I build frontends that
            users actually enjoy clicking around in!
          </p>
        </div>
        <div className="w-full lg:w-1/3 min-h-72 lg:h-80 bg-blue-50 rounded-3xl flex flex-col gap-3 p-4 lg:p-5 justify-center items-center shadow-lg">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-500 text-center">
            Backend
          </h1>
          <p className="text-center text-sm sm:text-base">
            Python wizard and Django enthusiast who loves building robust APIs
            and databases that actually work. I'm the one making sure your
            frontend has something solid to talk to - handling server logic,
            data flow, and all the behind-the-scenes magic that keeps web apps
            running smoothly. If it involves servers, databases, or making
            things scale, I'm your guy!
          </p>
        </div>
      </div>
    </div>
  );
}
export default AboutHome;
