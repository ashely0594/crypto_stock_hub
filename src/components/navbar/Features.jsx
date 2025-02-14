import { useState } from "react";
import { FaRobot, FaChartLine, FaUsers, FaBookOpen } from "react-icons/fa";

const features = [
  { 
    id: 1, 
    title: "ChatGPT AI", 
    description: "AI tailored to answering stock and crypto questions.",
    icon: <FaRobot className="text-blue-400 text-4xl" />
  },
  { 
    id: 2, 
    title: "Stock & Crypto Courses", 
    description: "Learn trading strategies and market insights.",
    icon: <FaChartLine className="text-green-400 text-4xl" />
  },
  { 
    id: 3, 
    title: "User Database", 
    description: "Connect with others, comment on posts, and upload pictures.",
    icon: <FaUsers className="text-purple-400 text-4xl" />
  },
  { 
    id: 4, 
    title: "Resources Tab", 
    description: "Access valuable market tools and news.",
    icon: <FaBookOpen className="text-yellow-400 text-4xl" />
  }
];

export default function Features() {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl font-bold mb-8">Platform Features</h1>

      <div className="flex gap-4 cursor-pointer">
        {features.map((feature) => (
          <div 
            key={feature.id} 
            className={`relative flex items-center justify-center rounded-xl transition-all duration-500 ease-in-out ${
              active === feature.id ? "w-60 h-60 bg-blue-600 p-6" : "w-16 bg-gray-700 p-4" 
            }`} 
            onClick={() => handleToggle(feature.id)}
          >
            <div className="absolute left-4">{feature.icon}</div> {/* Adjust left position here */}

            <div 
              className={`absolute left-24 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${ 
                active === feature.id ? "opacity-100" : "opacity-0" 
              }`}
            >
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

