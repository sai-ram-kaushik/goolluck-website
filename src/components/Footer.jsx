import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="w-full mt-10 p-3 px-5 lg:px-10">
         <div className="container mx-auto">
            {/* Set gap to ensure consistent spacing */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
               <div className="flex flex-col items-start gap-3">
                  <img src="/logo.svg" alt="Logo" />
               </div>

               <div className="flex flex-col items-start gap-3 text-lg">
                  <p className="font-bold text-primary">About Us</p>
                  <div className="flex flex-col gap-2">
                     <Link to="/" className="hover:text-primary cursor-pointer">Home</Link>
                     <Link to="/about" className="hover:text-primary cursor-pointer">About Us</Link>
                     <Link to="/services" className="hover:text-primary cursor-pointer">Blogs</Link>
                  </div>
               </div>

               <div className="flex flex-col items-start gap-3 text-lg">
                  <p className="font-bold text-primary">Contact Us</p>
                  <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-2">
                        <IoMdMail size={15} className="text-secondary" />
                        <a href="mailto:goolluck1@outlook.com">goolluck1@outlook.com</a>
                     </div>
                     <div className="flex items-start gap-2">
                        <FaPhoneAlt size={15} className="text-secondary" />
                        <p>+91 9999974265, 0124-4200901,4200903</p>
                     </div>
                     <div className="flex items-start gap-2">
                        <FaLocationDot size={20} className="text-secondary" />
                        <p>Office No-15, Ground Floor, Star Tower, Sector-30, Gurugram, India</p>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col items-start gap-3 text-lg">
                  <p className="font-bold text-primary">Privacy</p>
                  <div className="flex flex-col gap-2">
                     <p>FAQ</p>
                     <p>Terms</p>
                     <p>Privacy</p>
                  </div>
               </div>
            </div>

            <hr className="mt-5" />

            <div className="flex flex-col lg:flex-row items-center justify-between py-3 gap-3">
               <p>2024 - All Rights Reserved</p>
            </div>
         </div>
      </div>
   );
};

export default Footer;
