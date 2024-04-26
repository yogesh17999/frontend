import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import apiService from '../services/ApiService'

const Signup = ({ onLogin }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role,setRole] =useState("");

  const handleSignup = async () => {
    try {
      debugger
      if (!phoneNumber || !email || !password) {
        alert("Please enter username, email, and password");
        return;
      }
      let payload = {
        phoneNumber,
        email,
        password,
        // roleName : {role}
      }
      debugger
      
    
      const response = await apiService.signUp(payload);

      // Handle successful signup (e.g., store token, redirect, etc.)
      console.log("Signup successful:", response.data);
      // Optionally, you can trigger a login after signup
      onLogin(email);
    } catch (error) {
      debugger
      console.log(error);
      alert("Signup failed: "+ error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md">
        <div className="text-center">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">Sign up</h1>
        </div>
     

        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-1 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-1 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            placeholder="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-1 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* <div className="mb-4">
          <input
            type="text"
            placeholder="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-1 placeholder-gray-500 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
        </div> */}

        <div className="mb-4">
          <button
            onClick={handleSignup}
            className="w-full px-4 py-1 font-semibold text-white transition duration-300 bg-black rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
        
        <div className="text-center">
          <p className="mb-0 text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/signin" className="text-base text-blue-500 hover:text-blue-600">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
