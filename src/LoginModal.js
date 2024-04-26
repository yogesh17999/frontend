import React, { useState } from "react";
import { Link } from "react-router-dom";
import apiService from "./services/ApiService"; // Import your API service

const LoginModal = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      if (email && password) {
        // Make the login API request
        const payload = {
          email,
          password
        };

        const response = await apiService.logIn(payload);

        // Assuming the response includes a token upon successful login
        const { token,role } = response;

        if (token) {
          // Save token and expiry time in local storage
          const expiryTime = new Date().getTime() + 360000; // Set expiry to 6 minutes (360,000 milliseconds)
          localStorage.setItem("token", token);
          localStorage.setItem("roleName", role.roleName);

          localStorage.setItem("expiryTime", expiryTime);

          // Invoke the onLogin callback with the email and token
          onLogin(email, token);
        } else {
          alert("Token not found in response. Please try again.");
        }
      } else {
        alert("Please enter email and password.");
      }
    } catch (error) {
      alert(`Login Error: ${error.message}`);
      console.error("Login Error:", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-md shadow-md">
        <div className="text-center">
          <h1 className="mb-6 text-2xl font-semibold text-gray-800">Sign In</h1>
        </div>
        <div className="mb-4">
          <input
            type="text"
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
          <button
            onClick={handleLogin}
            className="w-full px-4 py-1 font-semibold text-white transition duration-300 bg-black rounded-md hover:bg-blue-600"
          >
            Sign In
          </button>
        </div>
        <div className="text-center">
          <p className="mb-0 text-sm text-gray-600">
            Recover login details?{" "}
            <a href="#" className="text-base text-blue-500 hover:text-blue-600">
              Recover
            </a>
          </p>
          <p className="mb-0 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
