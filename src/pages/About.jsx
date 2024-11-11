import React from "react";
import "animate.css";

const About = ({ about }) => {
   const {
      heading,
      aboutCompany,
      imageUrl,
      teamHeading,
      teamHeadTitle,
      desc,
      teamHeadImageUrl,
      team,
   } = about;
   return (
      <div className="w-full px-5 md:px-10 animate__animated animate__fadeInUp">
         <div className="flex flex-col items-center justify-center gap-3">
            <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
               {heading}
            </h2>

            <p className="max-w-[900px] text-center ">{aboutCompany}</p>

            <img src={imageUrl} width={600} height={100} className="" />
         </div>

         <div className="flex items-center justify-center mt-5">
            <h2 className="text-[25px] md:text-[40px] lg:text-[56px] max-w-[857px] md:leading-[67.2px] font-bold text-primary">
               {teamHeading}
            </h2>
         </div>

         <div className="flex items-center justify-center w-full py-5">
            <div className="flex flex-col items-center justify-center">
               <img
                  src={teamHeadImageUrl}
                  width={200}
                  className="rounded-full border-2 border-secondary"
               />
               <p className="text-secondary font-bold text-2xl">
                  {teamHeadTitle}
               </p>
               <p className="max-w-[500px] text-justify">{desc}</p>
            </div>
         </div>

         <div className="py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center w-full">
            {team.map((member, idx) => {
               return (
                  <div key={idx} className="flex flex-col items-center">
                     <img
                        src={member.imageUrl}
                        width={200}
                        className="rounded-full border-2 border-secondary"
                     />
                     <p className="text-secondary font-bold text-2xl">
                        {member.name}
                     </p>
                     <p className="max-w-[500px]">{member.desc}</p>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default About;
