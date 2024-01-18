import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="min-h-fit relative z-50">
      <div className="antialiased bg-[#99BDC1] dark-mode:bg-gray-900">
        <div className="w-full text-gray-700  bg-[#99BDC1] dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <a
                href="#"
                className="text-lg font-semibold tracking-widest text-gray-100 rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                iCare
              </a>
              <button
                className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleDropdown}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-6 h-6"
                >
                  <path
                    style={{ display: open ? "none" : "initial" }}
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 1100h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    style={{ display: open ? "initial" : "none" }}
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`md:flex md:flex-row md:justify-end md:flex-row ${
                open ? "flex" : "hidden"
              }`}
            >
              <a
                className="px-4 py-2 mt-2 text-sm  text-white font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                <Link to="/">Home</Link>
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm text-white font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                <Link to="/dashboard">Dashboard</Link>
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm text-white font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                <Link to="/bookappointments">Book Appointments</Link>
              </a>
              <a
                className="px-4 py-2 mt-2 text-sm text-white font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                href="#"
              >
                <Link to="/nearbyhospitals">Find Nearby Hospitals</Link>
              </a>
              <div className="relative" onClick={toggleDropdown}>
                <button className="flex flex-row text-gray-100 bg-gray-200 items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:w-auto md:inline md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                  <span>Login</span>
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1 ${
                      open ? "rotate-0" : "rotate-180"
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right z-50 ${
                    open
                      ? "transform opacity-100 scale-100"
                      : "transform opacity-0 scale-95"
                  }`}
                >
                  <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <p className="font-semibold">
                        <Link to="/userlogin">Login as User</Link>
                      </p>
                      <p className="font-semibold">
                        <Link to="/usersign">Signup as User</Link>
                      </p>
                      <p className="font-semibold">
                        <Link to="/doctorlogin">Login as Doctor</Link>
                      </p>
                      <p className="font-semibold">
                        <Link to="/doctorsign">Signup as Doctor</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
