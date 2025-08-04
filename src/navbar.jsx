import React, { useState } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const navItems = [
    { name: 'About Us' },
    {
      name: 'Workshops',
      dropdown: ['Online Workshops', 'Detox Plans', 'Recordings']
    },
    {
      name: 'Books',
      dropdown: ['Free eBooks', 'Physical Books']
    },
    {
      name: 'Products',
      dropdown: ['Kitchen Tools', 'Natural Supplements']
    },
    {
      name: 'Verticals',
      dropdown: ['Satvic Health', 'Satvic Kids', 'Satvic Yoga']
    },
    { name: 'Meet the Team' },
    {
      name: 'Blogs',
      dropdown: ['Health Blogs', 'Spirituality', 'Recipes']
    },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="bg-[#5C8374] text-white px-6 py-4 shadow-md flex items-center justify-between relative">
      <div className="flex items-center space-x-8">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide text-white flex items-center space-x-2">
          <div className="bg-white rounded-full w-6 h-6"></div>
          <span>satvic<br />movement</span>
        </div>

        {/* Menu Items */}
        <ul className="flex items-center space-x-6">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group"
              onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
              onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
            >
              <button className="hover:text-gray-300 transition duration-200">
                {item.name}
              </button>
              {item.dropdown && openDropdown === item.name && (
                <div className="absolute top-full left-0 bg-white text-gray-700 mt-2 rounded shadow-md z-50 min-w-[160px]">
                  {item.dropdown.map((sub, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub}
                    </a>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Us Button */}
      <button className="bg-white text-[#5C8374] font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition duration-200">
        Contact Us
      </button>
    </nav>
  );
};

export default Navbar;
