// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [scroll, setScroll] = useState(0);

//   const handleScroll = () => {
//     setScroll(window.scrollY);
//   };

//   const items = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Testimonials", href: "#testimonials" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const handleSmoothScroll = (e, href) => {
//     e.preventDefault();
//     setIsMenuOpen(false); // Close mobile menu when link is clicked

//     if (href === "#home") {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     } else {
//       const targetElement = document.querySelector(href);
//       if (targetElement) {
//         const navbarHeight = 80; // Account for fixed navbar
//         const elementPosition = targetElement.offsetTop - navbarHeight;

//         window.scrollTo({
//           top: elementPosition,
//           behavior: "smooth",
//         });
//       }
//     }
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-transparent z-50 p-3">
//       {/* Desktop Navbar */}
//       <div className="hidden lg:flex justify-center bg-blue-50/30 backdrop-blur-lg p-5 items-center rounded-xl border border-blue-500">
//         <ul className="flex gap-5">
//           {items.map((item) => (
//             <li key={item.label}>
//               <a
//                 href={item.href}
//                 onClick={(e) => handleSmoothScroll(e, item.href)}
//                 className="text-blue-500 hover:text-blue-50 hover:bg-blue-500 text-xl font-semibold px-3 py-1 border border-blue-500 rounded-lg transition-colors duration-300 ease-in-out cursor-pointer whitespace-nowrap"
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Mobile Navbar */}
//       <div className="lg:hidden">
//         {/* Mobile Header */}
//         <div className="flex justify-between items-center bg-blue-50/90 backdrop-blur-lg px-4 py-3 rounded-xl border border-blue-500">
//           <div className="text-blue-500 font-bold text-lg">Mohammed Ansari</div>
//           <button
//             onClick={toggleMenu}
//             className="text-blue-500 hover:text-blue-600 p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110"
//             aria-label="Toggle menu"
//           >
//             <div className="transition-transform duration-300 ease-in-out">
//               {isMenuOpen ? (
//                 <FaTimes
//                   size={20}
//                   className="transform rotate-180 transition-transform duration-300 ease-in-out"
//                 />
//               ) : (
//                 <FaBars
//                   size={20}
//                   className="transform rotate-0 transition-transform duration-300 ease-in-out"
//                 />
//               )}
//             </div>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`mt-2 bg-blue-50/95 backdrop-blur-lg rounded-xl border border-blue-500 shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
//             isMenuOpen
//               ? "opacity-100 scale-y-100 translate-y-0"
//               : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
//           }`}
//         >
//           <ul className="py-2">
//             {items.map((item, index) => (
//               <li
//                 key={item.label}
//                 className={`transform transition-all duration-300 ease-in-out ${
//                   isMenuOpen
//                     ? "translate-x-0 opacity-100"
//                     : "-translate-x-4 opacity-0"
//                 }`}
//                 style={{
//                   transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
//                 }}
//               >
//                 <a
//                   href={item.href}
//                   onClick={(e) => handleSmoothScroll(e, item.href)}
//                   className="block px-4 py-3 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold transition-colors duration-300 ease-in-out cursor-pointer border-b border-blue-200 last:border-b-0"
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <div
//         className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300 ease-in-out ${
//           isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
//         }`}
//         onClick={() => setIsMenuOpen(false)}
//       ></div>
//     </nav>
//   );
// // }

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetElement = document.querySelector(href);
    const navbarHeight = 80;
    if (targetElement) {
      const position =
        href === "#home" ? 0 : targetElement.offsetTop - navbarHeight;
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3">
      {/* Desktop Navbar */}
      <div className="hidden lg:flex justify-center">
        <div
          className={`w-full transition-all duration-700 ease-in-out rounded-xl border border-blue-500 bg-blue-50/30 backdrop-blur-lg
            ${
              isScrolled
                ? "max-w-3xl px-6 py-3 shadow-md scale-[0.98]"
                : "max-w-screen px-10 py-4 scale-100"
            } mx-auto`}
        >
          <ul className="flex justify-center gap-6">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-blue-500 hover:text-white hover:bg-blue-500 text-lg font-semibold px-3 py-1 border border-blue-500 rounded-lg transition-all duration-300 ease-in-out whitespace-nowrap"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="lg:hidden">
        <div className="flex justify-between items-center bg-blue-50/90 backdrop-blur-lg px-4 py-3 rounded-xl border border-blue-500">
          <div className="text-blue-500 font-bold text-lg">Mohammed Ansari</div>
          <button
            onClick={toggleMenu}
            className="text-blue-500 hover:text-blue-600 p-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mt-2 bg-blue-50/95 backdrop-blur-lg rounded-xl border border-blue-500 shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform origin-top ${
            isMenuOpen
              ? "opacity-100 scale-y-100 translate-y-0"
              : "opacity-0 scale-y-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="py-2">
            {items.map((item, index) => (
              <li
                key={item.label}
                className={`transition-all duration-300 ease-in-out ${
                  isMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
                }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="block px-4 py-3 text-blue-500 hover:bg-blue-500 hover:text-white font-semibold transition-colors duration-300 ease-in-out cursor-pointer border-b border-blue-200 last:border-b-0"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
    </nav>
  );
}
