import { Routes, Route } from "react-router-dom"; 
import { useState } from "react";
import Background from "./components/background/background"; 
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import Login from "./components/Login/Login";  
import Register from "./components/Register/Register";
import Features from "./components/navbar/Features";
import About from "./components/navbar/About";
import Contact from "./components/navbar/Conact";
const App = () => { 
  let heroData = [
    { text1: "Dive into ", text2: "the Crypto World" },
    { text1: "Indulge ", text2: "your curiosity" },
    { text1: "Give into ", text2: "your wallet" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(true);

  return (
    <div>
      <Navbar /> 

      <Routes>
        <Route
          path="/"
          element={
            <div className="text-white h-screen flex justify-center items-center bg-cover"
              style={{ backgroundImage: "url(/assets/image1.jpg)" }}>
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                playStatus={playStatus}
              />
            </div>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;

