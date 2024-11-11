import React from "react";
import "animate.css";

const HomeServices = ({ homeServices }) => {
   const { heading, services } = homeServices;
   return (
      <div className="w-full px-5 md:px-10 animate__animated animate__fadeInUp">
         <div className="flex justify-center ">
            <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
               {heading}
            </h2>
         </div>

         {/* Center the cards using justify-center and items-center */}
         <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center mt-5 w-full gap-5">
            {services.map((service, index) => {
               return (
                  <div
                     className="parent mx-auto h-full flex items-center justify-center"
                     key={index}
                  >
                     <div className="card h-full flex flex-col justify-start items-center">
                        <div className="logo mb-4">
                           <span className="circle circle4"></span>
                           <span className="circle circle5 text-background text-xl font-bold">
                              {service.count}
                           </span>
                        </div>
                        <div className="glass"></div>
                        <div className="content flex flex-col justify-start text-center">
                           <span className="text-background text-2xl lg:text-4xl font-bold mb-2">
                              {service.label}
                           </span>
                           <span className="text-[14px] lg:text-xl text-justify text-primary">{service.desc}</span>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default HomeServices;
