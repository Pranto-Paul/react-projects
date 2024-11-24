import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import appName from "../constant";
import { auth } from "../firebase";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";
import {toast} from 'react-toastify'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]   = useState("")
  const [password,setPassword] = useState("")
  const [isLogin,setisLogin] = useState(true)
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      if(!isLogin){
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        toast.success("Successfully signup ")
        setisLogin((prev)=>!prev)
      }
      else{
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        toast.success("Successfully logged in")
      }
    }
    catch(err){
      console.log(err.code)
      console.log(err.message)
    }
  };

  return (
    <div className="h-screen w-full flex justify-center items-center bg-slate-800 text-white">
      <div className="w-96 h-auto border-gray-300 rounded-lg shadow-lg flex flex-col items-center p-4">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">{appName}</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
          {/* Email Field */}
          <div className="w-3/4">
            <label className="text-lg mb-2 shadow-md" htmlFor="email">Email</label>
            <input
              className="w-full py-2 px-2 rounded-md bg-slate-500 outline-none"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>

          {/* Password Field */}
          <div className="w-3/4 relative">
            <label className="text-lg mb-2 shadow-md" htmlFor="password">Password</label>
            <div className="relative">
              <input
                className="w-full py-2 px-2 rounded-md bg-slate-500 outline-none"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-2 flex items-center text-gray-300 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-3/4 py-2 px-4 bg-orange-500 hover:bg-orange-600 rounded-md text-white font-bold"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
          <a className="cursor-pointer underline shadow-md" onClick={(e)=>{
            e.preventDefault()
            setisLogin((prev)=>!prev)
          }}>Click here to {isLogin ? "signup" : "login"}</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
