import { useState } from "react";
import { AiOutlineUnlock } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";
import API from "../../utils/API"; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [confirmPassword, setConfirmPassword] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await API.post("/signup", { 
        username, firstName, lastName, email, password
      });

      if (response.status === 201) {
        alert("User registered successfully!");
      } else {
        setError(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      setError("An error occurred during registration.");
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat" 
         style={{ backgroundImage: "url(/image1.jpg)" }}>
      
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div>
      
      <div className="relative z-10 bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 w-96">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Register</h1>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}> 
          {/* Username */}
          <div className="relative my-4">
            <input 
              type="text" 
              id="username"
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required 
              placeholder=" "
            />
            <label htmlFor="username" 
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Username
            </label>
            <BiUser className="absolute top-4 right-4 text-slate-400" />
          </div>

          {/* First Name */}
          <div className="relative my-4">
            <input 
              type="text" 
              id="firstName"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required 
              placeholder=" "
            />
            <label htmlFor="firstName" 
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First Name
            </label>
            <BiUser className="absolute top-4 right-4 text-slate-400" />
          </div> 

          {/* Last Name */}
          <div className="relative my-4">
            <input 
              type="text" 
              id="lastName"
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required 
              placeholder=" "
            />
            <label htmlFor="lastName" 
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last Name
            </label>
            <BiUser className="absolute top-4 right-4 text-slate-400" />
          </div>

          {/* Email */}
          <div className="relative my-4">
            <input 
              type="email" 
              id="email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required 
              placeholder=" "
            />
            <label htmlFor="email" 
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Email
            </label>
          </div>

          {/* Password */}
          <div className="relative my-4">
            <input 
              type="password" 
              id="password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required 
              placeholder=" "
            />
            <label htmlFor="password" 
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
          </div>

          {/* Confirm Password */}
          <div className="relative my-4">
            <input 
              type="password" 
              id="confirmPassword"
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required 
              placeholder=" "
            />
            <label htmlFor="confirmPassword" 
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-slate-400" />
          </div>

          <button 
            type="submit" 
            className="w-full text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition duration-300 text-center">
            Register
          </button>

          <div className="mt-4 text-center text-white">
            <span>Already registered? <Link className="text-blue-500" to="/login">Login</Link></span>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;




