// src/services/apiService.js
import axios from 'axios';

const baseURL = ' https://3424-103-138-234-11.ngrok-free.app'; // Your base URL

const apiService = {
  signUp: async (payload) => {
    try {
      const response = await axios.post(`${baseURL}/auth/api/signup`, payload);
      return response.data;
    } catch (error) {
        debugger
        console.log(error)
        if (error.response) {
            console.log(error.response.data.message);
            throw new Error(`${error.response.data.message}`);
        } else if (error.request) {
            // The request was made but no response was received
            console.log(error.request);
            throw new Error(`${error.request}`);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
    }
  },

  logIn: async (payload) => {
    try {
      const response = await axios.post(`${baseURL}/auth/api/signin`, payload);
      return response.data;
    } catch (error) {
        debugger
        console.log(error);
      throw new Error(`Login Error: ${error}`);
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
