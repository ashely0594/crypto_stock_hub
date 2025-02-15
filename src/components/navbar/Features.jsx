import { useState } from "react";
import { FaRobot, FaChartLine, FaUsers, FaBookOpen } from "react-icons/fa";
import chatgptImage from "../../assets/images/chatgpt.jpeg";
import coursesImage from "../../assets/images/courses.jpeg";
import usersImage from "../../assets/images/users2.jpeg";
import resourcesImage from "../../assets/images/resources.jpeg";

const features = [
  { 
    id: 1, 
    title: "ChatGPT AI", 
    description: "AI tailored to answering stock and crypto questions.",
    icon: <FaRobot className="text-blue-100 text-4xl" />, 
    image: chatgptImage
  },
  { 
    id: 2, 
    title: "Stock & Crypto Courses", 
    description: "Learn trading strategies and market insights.",
    icon: <FaChartLine className="text-green-400 text-4xl" />, 
    image: coursesImage
  },
  { 
    id: 3, 
    title: "User Database", 
    description: "Connect with others, comment on posts, and upload pictures.",
    icon: <FaUsers className="text-purple-400 text-4xl" />, 
    image: usersImage
  },
  { 
    id: 4, 
    title: "Resources Tab", 
    description: "Access valuable market tools and news.",
    icon: <FaBookOpen className="text-yellow-400 text-4xl" />, 
    image: resourcesImage
  }
];

export default function Features() {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Platform Features</h1>

      <div className="flex gap-4 cursor-pointer">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`relative flex items-center justify-center rounded-xl transition-all duration-500 ease-in-out overflow-hidden ${
              active === feature.id ? "w-60 h-60 bg-blue-900 p-6" : "w-16 bg-gray-900 p-4" 
            }`} 
            onClick={() => handleToggle(feature.id)}
          >
            {/* Background Image */}
            <img 
              src={feature.image} 
              alt={feature.title} 
              className="absolute inset-0 w-full h-full object-cover blur-sm opacity-60" 
            />
            
            {/* Icon */}
            <div className="absolute left-4 z-10">{feature.icon}</div>

            {/* Text Content */}
            <div 
              className={`absolute left-24 top-1/2 transform -translate-y-1/2 z-10 transition-opacity duration-300 ${ 
                active === feature.id ? "opacity-100" : "opacity-0" 
              }`}
            >
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm text-gray-100">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


