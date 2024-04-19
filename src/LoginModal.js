import React, { useState } from "react";

const LoginModal = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Validate username and password here
    // For simplicity, let's just check if username and password are not empty
    if (username && password) {
      onLogin(username);
    } else {
      alert("Please enter username and password");
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            <a href="#" className="text-base text-blue-500 hover:text-blue-600">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
