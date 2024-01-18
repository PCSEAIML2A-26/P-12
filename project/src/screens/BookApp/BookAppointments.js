import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";

function Bookappointments() {
  const [fname, setFname] = useState(null);
  const [lname, setlname] = useState(null);
  const [dob, setDOb] = useState(null);
  const [speciality, setSpeciality] = useState(null);
  const [hname, setHname] = useState(null);
  const [gender, setGender] = useState(null);
  const [age, setAge] = useState(null);
  const [qualification, setQualification] = useState(null);
  const [experience, setexperience] = useState(null);
  const [email, setemail] = useState(null);
  const [phonenumber, setphonenumber] = useState(null);
  const [photo, setphoto] = useState(null);

  const [authImage, setAuthImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [password, setpassword] = useState(null);

  const webcamRef = useRef(null);

  const formInput = (event) => {
    // console.log(event.target.id);
    if (event.target.id === "fname") {
      setFname(event.target.value);
    }
    if (event.target.id === "lname") {
      setlname(event.target.value);
    }
    if (event.target.id === "dateofbirth") {
      setDOb(event.target.value);
    }

    if (event.target.id === "hospitalname") {
      setHname(event.target.value);
    }
    if (event.target.id === "gender") {
      setGender(event.target.value);
    }

    if (event.target.id === "age") {
      setAge(event.target.value);
    }

    if (event.target.id === "email") {
      setemail(event.target.value);
    }
    if (event.target.id === "phonenumber") {
      setphonenumber(event.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(fname, lname, dob, hname, gender, age, email, phonenumber);
  };

  return (
    <div>
      <div className="w-full h-14 pt-2 text-center bg-gray-700 shadow overflow-hidden font-bold text-3xl text-white">
        Book Appointments
      </div>

      <section className="text-gray-600 body-font m-0 p-0 relative"></section>

      <div className="container mx-auto">
        <div className="flex flex-col text-center w-full mb-1"></div>

        <div className="mt-10 md:mt-0 md:col-span-2">
          <form onSubmit={handleSubmit} method="POST">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-2 py-8 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="requisition-no"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      id="fname"
                      onChange={formInput}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="requisition-no"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>
                    <input
                      id="lname"
                      onChange={formInput}
                      type="text"
                      placeholder="Last Name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="required-date"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      name="required-date"
                      id="dateofbirth"
                      onChange={formInput}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="designation"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Hospital Name
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        name="designation"
                        id="hospitalname"
                        onChange={formInput}
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                      <Link to="/nearbyhospitals">
                        <button
                          type="button"
                          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Find
                        </button>
                      </Link>
                    </div>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      onChange={formInput}
                      name="gender"
                      autoComplete="country"
                      className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="age"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Age
                    </label>
                    <input
                      type="text"
                      name="age"
                      placeholder="Above 18"
                      id="age"
                      onChange={formInput}
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email Description
                    </label>
                    <input
                      type="text"
                      name="email-description"
                      placeholder="someone@example.com"
                      id="email"
                      onChange={formInput}
                      autoComplete="email"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-description"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      type="number"
                      name="number"
                      id="phonenumber"
                      onChange={formInput}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* ... other form fields ... */}
                </div>
              </div>
              <div className="px-4 py-3 bg-white text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Bookappointments;
