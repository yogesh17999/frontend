import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdWindow } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdOutlineBarChart } from "react-icons/md";
import { PiTerminalFill } from "react-icons/pi";
import { VscChip } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscGlobe } from "react-icons/vsc";
import { RiExpandLeftLine } from "react-icons/ri";
import { RiExpandRightFill } from "react-icons/ri";
import moment from "moment";
import DateTime from "./DateTime";


const Sidebar = ({ location }) => {
  const [isExpanded, setIsExpanded] = useState(true); // State to control sidebar visibility
  const [userRole, setUserRole] = useState(null);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    // Retrieve user role from localStorage
    const storedRole = localStorage.getItem('roleName');

    // Update state with the retrieved role
    if (storedRole) {
      setUserRole(storedRole);
    }
  }, []);

  const sidebarClass = isExpanded ? "w-64" : "w-16"; // Determine sidebar width based on state
  const dashboardClass = isExpanded
    ? "opacity-100 transition-opacity duration-800"
    : "opacity-0 transition-opacity duration-400"; // Determine opacity based on state

  const pathname = location?.pathname;

  return (
    <div
      className={`fixed top-0 bottom-0 left-0 h-full p-4 transition-all duration-500 ease-in-out bg-white rounded-md shadow-md to-black ${sidebarClass}`}
    >
      <h2 className={`mb-4 text-lg font-bold text-center ${dashboardClass}`}>
        Dashsboard
      </h2>

      <button onClick={toggleSidebar} className="flex flex-col mb-4 items-left">
        {isExpanded ? (
          <RiExpandLeftLine className="w-10 h-10 mt-2 mb-2 fill-black" />
        ) : (
          <RiExpandRightFill className="w-10 h-10 mt-2 mb-2 fill-black" />
        )}
      </button>

      <ul>
        <li
          className={`transition-all duration-500 ease-in-out delay-100 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            to="/Overview"
            className={pathname === "/Overview" ? "font-bold text-black" : ""}
          >
            <MdWindow
              className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                }`}
            />
            {isExpanded && <span className="ml-2">Overview</span>}
          </Link>
        </li>

        <li
          className={`transition-all duration-500 ease-in-out delay-300 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            to="/charts"
            className={pathname === "/charts" ? "font-bold text-black" : ""}
          >
            <MdOutlineBarChart
              className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                }`}
            />
            {isExpanded && (
              <span className="ml-2 transition-all duration-500 ease-in-out">
                Charts
              </span>
            )}
          </Link>
        </li>

        <li
          className={`transition-all duration-500 ease-in-out delay-400 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            to="/cli"
            className={pathname === "/cli" ? "font-bold text-black" : ""}
          >
            <PiTerminalFill
              className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                }`}
            />
            {isExpanded && (
              <span className="ml-2 transition-all duration-500 ease-in-out">
                CLI (Command Line)
              </span>
            )}
          </Link>
        </li>



        {userRole === 'ADMIN' && (
          <li
            className={`transition-all duration-500 ease-in-out delay-600 ${isExpanded ? "opacity-100" : "opacity-0"
              }`}
          >
            <Link
              to="/Users"
              className={pathname === "/Users" ? "font-bold text-black" : ""}
            >
              <VscAccount
                className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                  }`}
              />
              {isExpanded && (
                <span className="ml-2 transition-all duration-500 ease-in-out">
                  Users
                </span>
              )}
            </Link>
          </li>
        )}




        <li
          className={`transition-all duration-500 ease-in-out delay-700 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            to="/Companies"
            className={pathname === "/Companies" ? "font-bold text-black" : ""}
          >
            <VscGlobe
              className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                }`}
            />
            {isExpanded && (
              <span className="ml-2 transition-all duration-500 ease-in-out">
                Companies
              </span>
            )}
          </Link>
        </li>

        <li
          className={`transition-all duration-500 ease-in-out delay-200 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            to="/admin_settings"
            className={
              pathname === "/admin_settings" ? "font-bold text-black" : ""
            }
          >
            <MdOutlineSettings
              className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                }`}
            />
            {isExpanded && (
              <span className="ml-2 transition-all duration-500 ease-in-out">
                Settings
              </span>
            )}
          </Link>
        </li>

        <li
          className={`transition-all duration-500 ease-in-out delay-100 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        >
          <Link
            to="/"
            className={pathname === "/" ? "font-bold text-black" : ""}
          >
            <MdOutlinePowerSettingsNew
              className={`inline-block w-10 h-10 mt-2 mb-2 text-black fill-black transition-all duration-500 ease-in-out ${isExpanded ? "" : "opacity-100"
                }`}
            />
            {isExpanded && <span className="ml-2">Log out</span>}
          </Link>
        </li>

        <li
          className={`py-[850px] 2xl:text-xl transition-all duration-500 ease-in-out delay-800 ${isExpanded ? "opacity-100" : "opacity-0"
            }`}
        ></li>
      </ul>
    </div>
  );
};

export default Sidebar;
