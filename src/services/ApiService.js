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
        debugger

        try {
            const response = await axios.get(`${baseURL}/api/user/v1/all`)
            // ,
            //  {
            //     headers:
            //         { Authorization: `Bearer ${token}`,"Access-Control-Allow-Origin" : "*", }

            // }
            // );
            console.log("response",response);
            return response.data;
        } catch (error) {
            throw new Error(`Get All Users Error: ${error.message}`);
        }
    }
};

export default apiService;
