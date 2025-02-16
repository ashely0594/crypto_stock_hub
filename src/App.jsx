import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Features from "./components/navbar/Features";
import Navbar from "./components/navbar/Navbar";
import About from "./components/navbar/About";
import Contact from "./components/navbar/Contact";
import  Home from "./components/Home/Home";


export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar isOpen={isSidebarOpen} onToggle={handleSidebarToggle} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-6">
          <h2 className="text-xl text-white mb-4">
            Welcome to Crypto Stock Hub
          </h2>
        
        </main>
      </div>
    </div>
  );
}
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;




