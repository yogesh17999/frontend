// src/services/apiService.js
import axios from 'axios';

const baseURL = 'https://f359-106-221-64-229.ngrok-free.app'; // Your base URL

const apiService = {
  signUp: async (payload) => {
    try {
      const response = await axios.post(`${baseURL}/auth/api/signup`, payload);
      return response.data;
    } catch (error) {
      throw new Error(`Sign Up Error: ${error.message}`);
    }
  },

  logIn: async (payload) => {
    try {
      const response = await axios.post(`${baseURL}/auth/api/signin`, payload);
      return response.data;
    } catch (error) {
      throw new Error(`Login Error: ${error.message}`);
    }
  },

  getAllUsers: async () => {
    try {
      const response = await axios.get(`${baseURL}/api/user/v1/all`);
      return response.data;
    } catch (error) {
      throw new Error(`Get All Users Error: ${error.message}`);
    }
  },

  deleteUser: async (userId) => {
    try {
      const response = await axios.delete(`${baseURL}/api/user/v1/delete/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Delete User Error: ${error.message}`);
    }
  },

  updateUser: async (userId, updatedUserData) => {
    try {
      const response = await axios.put(`${baseURL}/api/user/v1/update/${userId}`, updatedUserData);
      return response.data;
    } catch (error) {
      throw new Error(`Update User Error: ${error.message}`);
    }
  },

  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${baseURL}/api/user/v1/get/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error(`Get User by ID Error: ${error.message}`);
    }
  },
};

export default apiService;
