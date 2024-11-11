import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({ testimonials }) => {
   const { title, leftReviews, rightReviews } = testimonials;

   const colors = [
      "bg-purple-100",
      "bg-blue-100",
      "bg-green-100",
      "bg-yellow-100",
      "bg-pink-100",
   ];

   return (
      <div className="w-full px-5 md:px-10 py-10 relative">
         <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center gap-4 overflow-hidden">
               <h3 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
                  {title}
               </h3>

               <Marquee pauseOnHover={true} autoFill={false} speed={100}>
                  <div className="flex items-start gap-10">
                     {leftReviews.map((review, index) => (
                        <div
                           className={`w-full max-w-md ${
                              colors[index % colors.length]
                           } p-6 rounded-lg flex items-center shadow-md`}
                           key={index}
                        >
                           <div className="flex-1">
                              <p className="text-lg text-black mb-4">
                                 "{review.body}"
                              </p>
                              <div className="flex items-center">
                                 <img
                                    src={review.img}
                                    alt={`${review.name}'s avatar`}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                 />
                                 <div>
                                    <p className="font-bold text-black">
                                       {review.name} <span>&#8594;</span>
                                    </p>
                                    <p className="text-gray-500">
                                       @{review.username}
                                    </p>
                                    <p className="text-gray-500">
                                       {review.title}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </Marquee>
            </div>
         </div>
      </div>
   );
};

export default Testimonials;
