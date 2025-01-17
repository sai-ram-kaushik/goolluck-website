import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { FaUserCircle } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./ui/tabs";

const CourseCards = ({ courseName, price, Author, Scheduled, imgpath }) => {
  const navigate=useNavigate();
  return (
    <Tabs defaultValue="course" className="w-full md:w-[400px] p-4">
      <TabsList className="grid w-full grid-cols-2 bg-black rounded-lg shadow-md">
        <TabsTrigger value="course" className="py-2 px-4 text-center font-semibold hover:bg-orange-500 transition-colors">
          Course
        </TabsTrigger>
        <TabsTrigger value="course-details" className="py-2 px-4 text-center text-white hover:text-black font-semibold hover:bg-orange-500 transition-colors">
          Course Details
        </TabsTrigger>
      </TabsList>
      <div className="relative h-[500px]">
        <TabsContent value="course" className="absolute inset-0">
          <Card className="border-2 border-gray-200 rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
            <CardHeader className="p-0 relative">
              <img src={imgpath} alt={`${courseName} image`} className="w-full h-48 object-cover" />
            </CardHeader>
            <CardContent className="p-4 flex-grow space-y-4">
              <CardTitle className="text-2xl font-bold text-center text-gray-900">{courseName}</CardTitle>
              <CardDescription className="text-gray-700 text-center">
                The perfect guide on how to improve your public speaking skills.
              </CardDescription>
              <div className="space-y-4">
                <div className="flex items-center space-x-2 justify-center">
                  <FaUserCircle className="text-gray-500" size={24} />
                  <h2 className="text-gray-700">{Author}</h2>
                </div>
                <div className="flex items-center space-x-2 justify-center">
                  <BsCalendar className="text-gray-500" size={24} />
                  <h1>any random date</h1>
                </div>
                <div className="flex justify-center">
                  <h2 className="bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-full w-max">
                    {Scheduled}
                  </h2>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center">
              <Button onClick={()=>navigate(`/courses/${courseName}`,{state:{price}})} className="py-2 px-4 text-lg bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Enroll
              </Button>
              <h2 className="text-lg font-bold text-gray-900">₹{price}</h2>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="course-details" className="absolute inset-0">
          <Card className="border-2 border-gray-200 rounded-lg shadow-lg p-4 h-full flex flex-col justify-between">
            <div>
              <CardHeader>
                <CardTitle className="text-xl font-bold mb-4 text-center">Course Details</CardTitle>
                <CardDescription className="text-gray-700 text-center">
                  This course offers in-depth knowledge and practical skills to help you master {courseName}. It covers essential topics and advanced techniques, ensuring you gain a comprehensive understanding.
                </CardDescription>
              </CardHeader>
            </div>
            <CardFooter className="mt-4">
              <Button onClick={()=>navigate(`/courses/${courseName}`,{ state: {price}})} className="w-full py-2 text-lg bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
                Enroll
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default CourseCards;