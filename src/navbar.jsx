import React, { useEffect, useState } from "react";
import { LiaGripHorizontalSolid } from "react-icons/lia";
import logo from "./images/Cbp_logo_bgremoved.png";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [activeSection, setActiveSection] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Close sidebar when scrolling
  useEffect(() => {
    const handleScrollClose = () => {
      if (isOpen) setIsOpen(false);
    };
    window.addEventListener("scroll", handleScrollClose);
    return () => {
      window.removeEventListener("scroll", handleScrollClose);
    };
  }, [isOpen]);


  const navItems = [
    { name: "About Us" },
    { name: "TimeLine" },
    { name: "Workshops", dropdown: ["Online Workshops", "Detox Plans", "Recordings"] },
    { name: "Books", dropdown: ["Free eBooks", "Physical Books"] },
    { name: "Success Stories", dropdown: ["Kitchen Tools", "Natural Supplements"] },
    { name: "Meet the Team" },
    { name: "Info", dropdown: ["Health Blogs", "Spirituality", "Recipes"] },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };


  return (
    <nav
      className={`px-2 py-4 shadow-2xl flex items-center justify-between relative ${
        isScrolled
          ?" bg-[#015b98] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-[#015b98] text-white"
      }`}
    >
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-20 w-20 ml-20" />

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <button className="hover:text-gray-300 cursor-pointer transition duration-200 text-lg"
                onClick={() => handleMenuItemClick(item.name)}>
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Buy Tickets */}
      <button className="hidden md:flex mr-20 bg-white text-[#015b98] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-200">
        Buy Tickets
      </button>

      {/* Mobile Menu Icon */}
      <div className="md:hidden z-50 relative">
        {isOpen ? (
          <IoMdClose
            className="h-8 w-8 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <LiaGripHorizontalSolid
            className="h-10 w-10 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Dark overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Mobile Slide-in Sidebar */}
      <div
        className={`fixed top-0 w-3/6 right-0 h-full  bg-[#03386d] text-white p-6 z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-4 mt-16 ">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`hover:text-grey-400 ${
                activeSection === item.name ? " rounded-3xl backdrop-blur-md bg-[#022951] " : ""
              }`}
            >
              <button className="pl-5 pt-3 pb-3 text-md md:text-xl cursor-pointer hover:text-gray-400 " onClick={() => handleMenuItemClick(item.name)}>
                {item.name}
              </button>
            </li>
          ))}
          <li>
            <button className="bg-white text-[#022951] font-semibold px-4 py-2 rounded-full hover:bg-gray-200 cursor-pointer transition duration-200 w-full hover:border-2 border-black p-4">
              Buy Tickets
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
