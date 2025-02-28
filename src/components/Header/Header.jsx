import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../images/logo-inner.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [borderScale, setBorderScale] = useState(0);
  const toggleNav = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Change threshold as needed; here, after 100px scroll, the border is fully shown.
      const threshold = 100;
      const scrollY = window.scrollY;
      const scale = Math.min(scrollY / threshold, 1);
      setBorderScale(scale);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--fifth-color)] shadow-md relative">
      <div className="xl7-container flex items-center justify-between py-4">
        {/* LOGO */}
        <div className="flex items-center">
          <img src={logo} alt="Taxi Logo" className="h-10 w-auto object-contain" />
          <span className="ml-2 text-xl font-bold text-white">Taxi App</span>
        </div>
        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-6 font-semibold">
          <HashLink
            smooth
            to="/#home"
            className="relative group text-white py-1 transition-colors duration-300 hover:text-[var(--primary-color)]"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary-color)] group-hover:w-full transition-all duration-300" />
          </HashLink>
          <HashLink
            smooth
            to="/#aboutus"
            className="relative group text-white py-1 transition-colors duration-300 hover:text-[var(--primary-color)]"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary-color)] group-hover:w-full transition-all duration-300" />
          </HashLink>
          <HashLink
            smooth
            to="/#contactus"
            className="relative group text-white py-1 transition-colors duration-300 hover:text-[var(--primary-color)]"
          >
            Contact Us
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary-color)] group-hover:w-full transition-all duration-300" />
          </HashLink>
          <HashLink
            smooth
            to="/#book"
            className="relative group text-white py-1 transition-colors duration-300 hover:text-[var(--primary-color)]"
          >
            Book a Taxi
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[var(--primary-color)] group-hover:w-full transition-all duration-300" />
          </HashLink>
        </nav>
        {/* MOBILE NAV */}
        <button
          className="block md:hidden text-white hover:text-[var(--primary-color)]"
          onClick={toggleNav}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </div>
      <div className={`md:hidden bg-[var(--fifth-color)] transition-all duration-300 ease-in-out ${isOpen ? "max-h-60" : "max-h-0 overflow-hidden"}`}>
        <nav className="flex flex-col px-6 pb-4 border-t border-[var(--primary-color)]">
          <HashLink smooth to="/#home" className="py-2 text-white hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)}>Home</HashLink>
          <HashLink smooth to="/#aboutus" className="py-2 text-white hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)}>About Us</HashLink>
          <HashLink smooth to="/#contactus" className="py-2 text-white hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)}>Contact Us</HashLink>
          <HashLink smooth to="/#book" className="py-2 text-white hover:text-[var(--primary-color)] transition-colors" onClick={() => setIsOpen(false)}>Book a Taxi</HashLink>
        </nav>
      </div>
      {/* Animated border element */}
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden">
        <div
          style={{ transform: `scaleX(${borderScale})` }}
          className="h-full bg-[var(--primary-color)] origin-center transition-transform duration-300"
        />
      </div>
    </header>
  );
};

export default Header;
