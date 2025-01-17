import React, { useState } from "react";
import { useParams,useLocation } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
  const { courseId } = useParams();
  const location=useLocation();
  console.log(location);
  const {price}=location.state;
//   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

//   const handleclick = () => {
//      navigate('/')
//   }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //yaha backend ko post api bhejega jisse database mei register karne vaalo ki details aa jaaye
    console.log("Form submitted with details:", formData);
  };

  const paymentAmount = 100; 

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-serif">
      <div className="max-w-4xl mx-auto bg-black shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-gray-300 py-8 px-6 text-center">
          <h1 className="text-4xl font-extrabold uppercase">
            {courseId} Workshop Registration
          </h1>
          <p className="mt-2 text-lg font-medium">
            Join us for an incredible learning experience!
          </p>
        </div>
  
        {/* Form Section */}
        <div className="p-6 text-gray-300">
          <p className="mb-6 text-center">
            Fill out the form below to secure your spot in the <b>{courseId}</b> workshop.
          </p>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="flex items-center space-x-4">
              <label htmlFor="name" className="block text-sm font-medium w-1/4">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="w-3/4 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 font-serif placeholder-gray-400"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            {/* Email Field */}
            <div className="flex items-center space-x-4">
              <label htmlFor="email" className="block text-sm font-medium w-1/4">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-3/4 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 font-serif placeholder-gray-400"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            {/* Phone Field */}
            <div className="flex items-center space-x-4">
              <label htmlFor="phone" className="block text-sm font-medium w-1/4">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="w-3/4 p-2 border border-gray-300 rounded-lg shadow-sm focus:ring-orange-500 focus:border-orange-500 font-serif placeholder-gray-400"
                placeholder="Phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
  
            {/* Payment Section */}
            <div className="bg-black p-4 rounded-lg shadow-inner font-serif">
              <h2 className="text-lg font-semibold mb-2">Payment Details</h2>
              <p className="text-gray-300">
                Amount to be paid:{" "}
                <span className="text-orange-600 font-bold">₹{price}</span>
              </p>
            </div>
  
            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 rounded-lg shadow-lg bg-orange-500 hover:bg-black text-white font-bold text-lg transition duration-300 ease-in-out font-serif"
            >
              Register and Pay
            </button>
          </form>
        </div>
  
        {/* What You'll Learn Section */}
        <div className="bg-gray-50 px-6 py-8 font-serif">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">What You'll Learn</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Introduction to {courseId}</li>
            <li>Key concepts and fundamentals</li>
            <li>Hands-on projects and exercises</li>
            <li>Advanced topics and real-world applications</li>
            <li>Q&A sessions and interactive discussions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};  
export default CourseDetails;