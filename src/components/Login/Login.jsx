import { useNavigate, Link } from "react-router-dom";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";





const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password, rememberMe });
    navigate("/");
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/image1.jpg)" }} 
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black bg-opacity-30"></div>
      
{/* Login Form */}
 <div className="bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative w-96">
        <h1 className="text-4xl text-white font-bold text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative my-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-4 right-4 text-white" />
          </div>

          {/* Password Field */}
          <div className="relative my-4">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-72 py-2 px-0 text-sm text-white bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-600 peer"
              required
            />
            <label
              htmlFor="password"
              className="absolute text-sm text-white transform -translate-y-6 scale-75 top-3 -z-10 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Password
            </label>
            <AiOutlineUnlock className="absolute top-4 right-4 text-white" />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center my-4">
            <div className="flex gap-2 items-center ">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to="/forgot-password" className="text-blue-500">
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition duration-300"
          >
            Login
          </button>

          {/* Create Account Link */}
          <div className="mt-4 text-center text-shadow">
            <span>
              New Here?{" "}
              <Link className="text-blue-500" to="/register">
                Create an Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

