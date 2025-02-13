import { useState } from "react";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/api/users/register", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("User registered successfully!");
      } else {
        alert("Error: " + data);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url(/image1.jpg)" }}>
      
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 w-96">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Register</h1>
        <form onSubmit={handleSubmit}> 
          <div className="relative my-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                   className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                   required />
            <label className="absolute text-sm text-white top-3 peer-focus:text-blue-600">First Name</label>
            <BiUser className="absolute top-4 right-4 text-slate-400" />
            
            
           
          </div> 
          <div className="relative my-4">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                   className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                   required />
          <label className="absolute text-sm text-white top-3 peer-focus:text-blue-600">Last Name</label>
            <BiUser className="absolute top-4 right-4 text-slate-400" />
            </div>
          <div className="relative my-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                   required />
            <label className="absolute text-sm text-white top-3 peer-focus:text-blue-600">Your Email</label>
          </div>
          <div className="relative my-4">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                   required />
            <label className="absolute text-sm text-white top-3 peer-focus:text-blue-600">Your Password</label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
          </div>
          <div className="relative my-4">
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                   className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
                   required />
            <label className="absolute text-sm text-white top-3 peer-focus:text-blue-600">Confirm Password</label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
          </div>
          <button type="submit" className="w-full text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition duration-300">
            Register
          </button>
          <div className="mt-4 text-center">
            <span>Already registered? <Link className="text-blue-500" to="/login">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

