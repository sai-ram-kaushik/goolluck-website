import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const StockMarketTraining = ({ training }) => {
   const { title, iit, mdi, hansraj } = training;

   const [availableCourse, setAvailableCourses] = useState([]);
   

   useEffect(() => {
      axios
         .get(
            `${import.meta.env.VITE_APP_API_ENDPOINT}/api/v1/admin/get-all-courses`
         )
         .then((response) => {
            setAvailableCourses(response.data.data);
            console.log(response.data.data);
         });
   }, []);
   return (
      <div>
         <div className="w-full px-5 lg:px-10">
            <div className="flex items-center justify-center w-full">
               <h2 className="text-4xl font-bold">Available Courses</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full py-5">
               {availableCourse.map((course, idx) => {
                  return (
                     <Link to={`/stock-market-training/course/${course._id}`}>
                        <div className="flex flex-col items-start" key={idx}>
                           <img
                              src={course.imageUrl}
                              width={300}
                              className="rounded-xl"
                           />
                           <p>{course.name}</p>
                        </div>
                     </Link>
                  );
               })}
            </div>
         </div>
         <div className="w-full px-5 lg:px-10">
            <div className="flex items-center justify-center w-full">
               <h2 className="text-4xl font-bold">{title}</h2>
            </div>

            <div className="flex flex-col items-center py-5">
               <h3 className="text-3xl font-bold">
                  Workshop at <span>IIT - Guwahati</span>
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
                  {iit.map((image, idx) => {
                     return (
                        <img
                           src={image.photo}
                           width={300}
                           className="rounded-xl"
                           key={idx}
                        />
                     );
                  })}
               </div>
            </div>

            <div className="flex flex-col items-center py-5">
               <h3 className="text-3xl font-bold">
                  Corporate Training <span>New Delhi</span>
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
                  {mdi.map((image, idx) => {
                     return (
                        <img
                           src={image.photo}
                           width={300}
                           className="rounded-xl"
                           key={idx}
                        />
                     );
                  })}
               </div>
            </div>

            <div className="flex flex-col items-center py-5">
               <h3 className="text-3xl font-bold">
                  Workshop at <span>Hansraj College, New Delhi</span>
               </h3>
               <div className="flex flex-wrap items-center justify-center gap-6 py-5 w-full">
                  {hansraj.map((image, idx) => {
                     return (
                        <img
                           src={image.photo}
                           width={300}
                           className="rounded-xl"
                           key={idx}
                        />
                     );
                  })}
               </div>
            </div>
         </div>
      </div>
   );
};

export default StockMarketTraining;
