import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-50 mt-16 sm:mt-20 lg:mt-24">
      <div className="p-3 sm:p-5">
        <div className="bg-blue-100 rounded-3xl shadow-lg">
          <div className="px-4 sm:px-8 lg:px-10 py-8 lg:py-12">
            {/* Main Content */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8">
              {/* Left Side - Name & Description */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-500 mb-2 lg:mb-3">
                  Mohammed Ansari
                </h3>
                <p className="text-gray-600 text-sm sm:text-base max-w-md">
                  Full-Stack Web Developer crafting modern digital experiences
                </p>
              </div>

              {/* Right Side - Social Links */}
              <div className="flex items-center gap-3 lg:gap-4">
                <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <FaFacebookF size={14} className="lg:w-4 lg:h-4" />
                </div>
                <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <FaTwitter size={14} className="lg:w-4 lg:h-4" />
                </div>
                <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <FaLinkedinIn size={14} className="lg:w-4 lg:h-4" />
                </div>
                <div className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors">
                  <FaGithub size={14} className="lg:w-4 lg:h-4" />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 lg:my-8">
              <hr className="border-gray-300" />
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-600 text-xs sm:text-sm text-center">
                <span>© {currentYear} Mohammed Ansari. Made with</span>
                <FaHeart className="text-red-500" size={12} />
                <span>and ☕</span>
              </div>

              <button
                onClick={scrollToTop}
                className="bg-blue-500 text-white p-2 lg:p-3 rounded-full w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <FaArrowUp size={14} className="lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
