import React, { useState, useEffect } from "react";
import { GraduationCap, BookOpen, Trophy, ChevronDown, PlayCircle, Sun, Moon } from "lucide-react";
import Quiz from "./Quiz";
import { Sidebar } from "../../Home/Sidebar";

const sampleQuizQuestions = {
  "Buying Call Options": [
    {
      question: "What is a call option?",
      options: [
        "Right to sell a stock at a specific price",
        "Right to buy a stock at a specific price",
        "Obligation to buy a stock",
        "Obligation to sell a stock",
      ],
      correctAnswer: 1,
    },
    {
      question: "What happens when a call option expires in-the-money?",
      options: [
        "You lose the premium paid",
        "You have the right to buy shares at strike price",
        "The option becomes worthless",
        "You must sell your shares",
      ],
      correctAnswer: 1,
    },
  ],
};

const courseLevels = [
  {
    level: "Beginner",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "Start your trading journey here",
    lessons: [
      {
        title: "Setting Up a Brokerage Account",
        videoId: "example1",
        duration: "15 min",
      },
      {
        title: "Introduction to Options Trading",
        lessons: [
          {
            title: "Lesson 1: Buying Call Options",
            videoId: "example2",
            duration: "20 min",
            quiz: sampleQuizQuestions["Buying Call Options"],
          },
          {
            title: "Lesson 2: Buying Put Options",
            videoId: "example3",
            duration: "20 min",
          },
          {
            title: "Lesson 3: Option Greeks",
            videoId: "example4",
            duration: "25 min",
          },
          {
            title: "Lesson 4: Selling Covered Calls",
            videoId: "example5",
            duration: "22 min",
          },
          {
            title: "Lesson 5: Selling Put Options",
            videoId: "example6",
            duration: "18 min",
          },
          {
            title: "Lesson 6: Straddle Options",
            videoId: "example7",
            duration: "23 min",
          },
        ],
      },
    ],
  },
  {
    level: "Intermediate",
    icon: <BookOpen className="w-6 h-6" />,
    description: "Advance your trading knowledge",
    lessons: [
      {
        title: "Technical Analysis Basics",
        videoId: "example8",
        duration: "18 min",
      },
      {
        title: "Fibonacci Retracements",
        videoId: "example9",
        duration: "22 min",
      },
      {
        title: "Bollinger Bands Strategy",
        videoId: "example10",
        duration: "20 min",
      },
      {
        title: "Swing Trading Strategies",
        videoId: "example11",
        duration: "24 min",
      },
    ],
  },
  {
    level: "Advanced",
    icon: <Trophy className="w-6 h-6" />,
    description: "Master complex trading strategies",
    lessons: [
      {
        title: "Algorithmic Trading Basics",
        videoId: "example12",
        duration: "30 min",
      },
      {
        title: "Building Trading Bots",
        videoId: "example13",
        duration: "35 min",
      },
      {
        title: "Options Spread Strategies",
        videoId: "example14",
        duration: "28 min",
      },
      {
        title: "Market Psychology & Sentiment Analysis",
        videoId: "example15",
        duration: "32 min",
      },
    ],
  },
];

export const CourseLayout = () => {
  const [expandedLevel, setExpandedLevel] = useState("Beginner");
  const [showQuiz, setShowQuiz] = useState(null);
  const [completedQuizzes, setCompletedQuizzes] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const handleQuizComplete = (lessonTitle, score) => {
    setCompletedQuizzes([...completedQuizzes, lessonTitle]);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  // Toggle Dark Mode & Save Preference
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (event.clientX > window.innerWidth - 50) {
        setIsSidebarOpen(true);
      } else if (event.clientX < window.innerWidth - 300) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={`flex w-full min-h-screen ${isDarkMode ? "dark bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}`}>
      {/* Sidebar - Appears on Hover */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        isDarkMode={isDarkMode} 
        onThemeToggle={toggleTheme} 
      />

      {/* Main Course Content */}
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Trading Courses</h1>

            {/* Dark Mode Toggle Button */}
            <button onClick={toggleTheme} className="p-2 rounded-lg bg-gray-700 hover:bg-gray-600 flex items-center gap-2">
              {isDarkMode ? <Sun size={20} className="text-white" /> : <Moon size={20} className="text-white" />}
              <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>

          <div className="space-y-4">
            {courseLevels.map((course) => (
              <div key={course.level} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedLevel(course.level)}
                  className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-blue-600">{course.icon}</div>
                    <div className="text-left">
                      <h2 className="font-semibold">{course.level}</h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform ${
                      expandedLevel === course.level ? "transform rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedLevel === course.level &&
                  course.lessons.map((lesson, index) => (
                    <div key={index} className="border-t border-gray-100 dark:border-gray-700 p-4">
                      <h3 className="font-medium">{lesson.title}</h3>
                      <span className="text-sm text-gray-400">{lesson.duration}</span>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLayout;



