import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import DarkModeToggle from '../components/DarkModeToggle'; // Adjust the path as needed
import FontSizeIncreaser from '../components/FontSizeIncreaser'; // Adjust the path as needed
import ToggleButton from '../components/ToggleButton';
import TwoColumnGrid from '../components/TwoColumnGrid';
import { Card, CardBody } from '@windmill/react-ui';
import Usertable from '../components/Usertable';
import apiService from '../services/ApiService';

const Users = () => {
  const [isExpanded, setIsExpanded] = useState(true); // State to control sidebar visibility
  const [userList, setUserList] = useState([])

  const data = [
    { id: 2, email: 'yogesh1799s9@gmail.com', phoneNumber: '7600259499' },
    { id: 3, email: 'yogesh17999@gmail.com', phoneNumber: '7600259499' },
    { id: 4, email: 'yogesh179s99@gmail.com', phoneNumber: '7600259499' },
    { id: 5, email: 'abc17999@gmail.com', phoneNumber: '7777259499' },
    { id: 6, email: 'sourabh@gmail.com', phoneNumber: '9877899876' },
    { id: 7, email: 'sourabh@bn.cm', phoneNumber: '9879879878' },
    { id: 8, email: 'user@gmail.com', phoneNumber: '9998889998' },
    { id: 9, email: 'user@gmail.com', phoneNumber: '9998889998' },
    { id: 10, email: 'user@gmail.com', phoneNumber: '9998889998' },

  ];

  const fetchUsers = async () => {
    const token = localStorage.getItem('token');
    if (token && token != '') {

      console.log("token", token);
      try {
        // Call the getAllUsers API with the provided token
        const usersData = await apiService.getAllUsers();
        setUserList(usersData); // Update state with the fetched users
        console.log("userList", userList);
      } catch (error) {
        console.error('Error fetching users:', error.message);
        // Handle error, e.g., show an error message to the user
      }
    }
  };


  useEffect(() => {
    console.log("inside useeffect");
    fetchUsers(); // Call the fetchUsers function to fetch user data


  }, [fetchUsers])
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div className="flex">
      <Sidebar isExpanded={isExpanded} />
      <div style={{ paddingBottom: '2%' }} className={`flex-1 ${isExpanded ? 'ml-64' : 'ml-16'}`}>
        <div className='flex justify-center'>
          <div className='w-full max-w-screen-lg px-4'>
            <div className='pt-20'>
              <div className="max-w-2xl mx-auto p-10 relative">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded absolute top-0 right-0"
                >
                  <Link to="/createuser">Create User</Link>

                </button>
              </div>
              <div className='px-20'>

                <div className="slide-in">

                  <Card>

                    <CardBody>
                      <p className="mb-4 text-2xl font-semibold text-center text-gray-600 dark:text-gray-600">USERS</p>

                      <hr></hr>
                      <br></br>




                      <Usertable userList={data} />
                      {/* <ul class="flex flex-col md:grid grid-cols-3 gap-5 text-redis-neutral-800 max-w-2xl mx-auto p-10 text-center">
                        <li
                          class="w-full text-sm font-semibold text-slate-900 bg-white border border-slate-700/10 bg-clip-padding shadow-md shadow-slate-900/5 flex flex-col justify-center">
                          <span class="mb-1 text-indigo-800 font-display text-l"><button>Create User</button></span>
                        </li>

                        <li
                          class="w-full text-sm font-semibold text-slate-900 bg-white border border-slate-700/10 bg-clip-padding shadow-md shadow-slate-900/5 flex flex-col justify-center">
                          <span class="mb-1 text-indigo-800 font-display text-l"><button>Modify User</button></span>
                        </li>

                        <li
                          class="w-full text-sm font-semibold text-slate-900 bg-white border border-slate-700/10 bg-clip-padding shadow-md shadow-slate-900/5 flex flex-col justify-center">
                          <span class="mb-1 text-indigo-800 font-display text-l"><button>Delete User</button></span>
                        </li>
                      </ul> */}






                    </CardBody>
                  </Card>

                </div>









              </div>
            </div>
          </div>
        </div>



      </div>
      <Footer />
    </div>
  );
};

export default Users;
