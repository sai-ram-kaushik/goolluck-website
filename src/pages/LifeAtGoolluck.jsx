import React from "react";

const LifeAtGoolluck = ({ gallery }) => {
   const { title, photos } = gallery;
   return (
      <div className="w-full">
         <div className="flex items-center justify-center w-full">
            <h2 className="text-4xl font-bold">{title}</h2>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-5 lg:px-10 py-5">
            {photos.map((image, idx) => {
               return (
                  <div
                     key={idx}
                     className="relative group overflow-hidden cursor-pointer"
                  >
                     <img
                        className="w-full h-96 object-cover rounded-xl transition duration-500 ease-in-out transform group-hover:blur-sm"
                        src={image.photo}
                        alt=""
                     />
                     <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
                        <p className="text-lg">{image.description}</p>
                     </div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default LifeAtGoolluck;
