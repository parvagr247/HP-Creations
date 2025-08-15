import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { BiSolidSend } from "react-icons/bi";
import { IoIosGlobe } from "react-icons/io";

const App = () => {
  return (
    <div id="Info" className="w-full  overflow-hidden font-sans">
      {/* ===== Hero Section above the Wave Animation (Floating)  === */}
      <div className="relative h-25 md:h-[300px] flex items-center justify-center text-white">
        {/* Wave Animation */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            fill="#015b98"
            initial={{ pathLength: 0 }}
            animate={{
              d: [
                "M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z",
                "M0,200 C360,120 1080,280 1440,200 L1440,320 L0,320 Z",
                "M0,160 C360,280 1080,40 1440,160 L1440,320 L0,320 Z",
              ],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* ===== Footer Section ===== */}
      <div className="bg-[#015b98] text-white  px-6 md:px-16 -mt-1">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold mb-4">
              CAPACITY BUILDING <br />
              PROGRAMME
            </h2>
            <hr className="border-white/40 w-[80px] mb-4" />
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/cbpmnit "
                target="_blank">
                <FaInstagram className="text-xl hover:text-pink-400 " />
              </a>
              <a href="https://www.youtube.com/@MNITJaipurIndia">
               <FaYoutube className="text-xl hover:text-red-400" />
              </a>
             
              <a href="https://www.mnit.ac.in/">
              <IoIosGlobe  className="text-xl hover:text-green-400 " /></a>
            </div>
          </motion.div>

          {/* Center Section */}
          <motion.div
            className="grid grid-cols-2 gap-6 text-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="font-bold mb-2">Explore</p>
              <ul className="space-y-1 ">
                <li>About Us</li>
                <li>Workshops</li>
                <li>Books</li>
                <li>Products</li>
                <li>Satvic Yoga</li>
                <li>Satvic Recipes</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2">Community</p>
              <ul className="space-y-1">
                <li>Satvic Youth</li>
                <li>Meet The Team</li>
                <li>Satvic Stories</li>
                <li>Blogs</li>
                <li>Contact Us</li>
                <li>Workshop Login</li>
              </ul>
            </div>
          </motion.div>

          {/* Right Section - Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="font-bold mb-4 text-sm ">Join our Newsletter</p>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="mb-2 p-2 w-full rounded text-black border-2 border-amber-50"
            />
            <div className="mb-2 rounded relative border-2 border-amber-50">
              <span className="absolute left-2 top-2 ">🇮🇳</span>
              <input
                type="text"
                placeholder="India"
                className="pl-8 p-2 w-full rounded text-black"
              />
            </div>
            <input
              type="email"
              placeholder="Enter your e-mail "
              className="mb-2 p-2 w-full rounded text-black border-2 border-amber-50"
            />
            <button className="flex items-center justify-center gap-2 bg-white text-[#015b98] py-2 px-4 rounded hover:bg-gray-100">
              Send <BiSolidSend />
            </button>
          </motion.div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-white/30" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between text-xs text-white/80"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="mb-2 ">© 2025 Capacity Builiding Program. All Rights Reserved.</p>
          <div className="flex gap-4 mt-2 mb-2  md:mt-0">
            <span>Terms & conditions</span>
            <span>Privacy Policy</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default App;
