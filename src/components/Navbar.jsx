import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ navbar }) => {
   const { title, leftnavlinks, rightnavlinks } = navbar;
   const location = useLocation();
   const [menuOpen, setMenuOpen] = useState(false);

   const toggleMenu = () => {
      setMenuOpen(!menuOpen);
   };

   return (
      <div className="w-full p-5 flex items-center justify-center ">
         <div className="bg-primary rounded-3xl w-full  text-background p-4">
            <div className="flex items-center justify-center w-full">
               {/* extreme left based logo */}
               <div className="flex justify-start">
                  <Link to="/" className="flex items-center">
                     <img
                        src="/logo_white.svg"
                        width={380}
                        alt="Logo"
                        className="ml-4"
                     />
                  </Link>
               </div>

               {/* Left navigation links  */}
               <div className="hidden md:flex items-center justify-center ml-8 flex-grow gap-12">
                  {leftnavlinks.map((leftlink, index) => (
                       <ul
                    key={index}
                   className={`flex items-center font-bold text-lg ${
                      location.pathname === leftlink.path
                     ? "text-background p-2 bg-secondary rounded-xl"
                       : "text-background/60"
                     }`}
                        >
                     <Link to={leftlink.path}>
                     <li>{leftlink.label}</li>
                      </Link>
                       </ul>
                       ))}
                     </div>


               {/* Right navigation links (desktop) */}
               <div className="hidden md:flex items-center ml-auto mr-12 gap-9">
                  {rightnavlinks.map((rightlink, index) => (
                     <ul
                        key={index}
                        className={`flex items-center font-bold text-lg ${
                           location.pathname === rightlink.path
                              ? "text-background p-2 bg-secondary rounded-xl"
                              : "text-background/60"
                        }`}
                     >
                        <Link to={rightlink.path}>
                           <li>{rightlink.label}</li>
                        </Link>
                     </ul>
                  ))}
               </div>

               {/* Mobile Menu Icon */}
               <div className="md:hidden flex items-center">
                  {menuOpen ? (
                     <FiX
                        className="text-3xl text-background cursor-pointer"
                        onClick={toggleMenu}
                     />
                  ) : (
                     <FiMenu
                        className="text-3xl text-background cursor-pointer"
                        onClick={toggleMenu}
                     />
                  )}
               </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
               <div className="flex flex-col mt-4 md:hidden gap-4">
                  {/* Left navigation links (visible on mobile) */}
                  {leftnavlinks.map((leftlink, index) => (
                     <ul
                        key={index}
                        className={`flex items-center font-bold ${
                           location.pathname === leftlink.path
                              ? "text-background p-2 bg-secondary rounded-xl"
                              : "text-background/60"
                        }`}
                     >
                        <Link to={leftlink.path} onClick={toggleMenu}>
                           <li>{leftlink.label}</li>
                        </Link>
                     </ul>
                  ))}

                  {/* Right navigation links (visible on mobile) */}
                  {rightnavlinks.map((rightlink, index) => (
                     <ul
                        key={index}
                        className={`flex items-center font-bold ${
                           location.pathname === rightlink.path
                              ? "text-background p-2 bg-secondary rounded-xl"
                              : "text-background/60"
                        }`}
                     >
                        <Link to={rightlink.path} onClick={toggleMenu}>
                           <li>{rightlink.label}</li>
                        </Link>
                     </ul>
                  ))}
               </div>
            )}
         </div>
      </div>
   );
};

export default Navbar;
