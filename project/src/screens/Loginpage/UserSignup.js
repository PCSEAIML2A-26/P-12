import React, { useState } from "react";

function UserSignup() {
  const [fname, setFname] = useState(null);
  const [lname, setlname] = useState(null);
  const [dob, setDOb] = useState(null);
  const [gender, setGender] = useState(null);
  const [address, setaddress] = useState(null);
  const [age, setAge] = useState(null);
  const [email, setemail] = useState(null);
  const [phonenumber, setphonenumber] = useState(null);
  const [password, setpassword] = useState(null);

  const formInput = (event) => {
    if (event.target.id === "fname") {
      setFname(event.target.value);
    }
    if (event.target.id === "lname") {
      setlname(event.target.value);
    }
    if (event.target.id === "gender") {
      setGender(event.target.value);
    }
    if (event.target.id === "dateofbirth") {
      setDOb(event.target.value);
    }
    if (event.target.id === "address") {
      setaddress(event.target.value);
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
    if (event.target.id === "password") {
      setpassword(event.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    console.log(
      fname,
      lname,
      dob,
      address,
      gender,
      age,
      email,
      phonenumber,
      password
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="w-full h-14 pt-2 text-center bg-gray-700 shadow overflow-hidden font-bold text-3xl text-white">
          User Sign Up
        </div>

        {/* Rest of your form inputs and fields go here */}
        <section className="text-gray-600 body-font m-0 p-0 relative"></section>

        <div className="container mx-auto">
          <div className="flex flex-col text-center w-full mb-1"></div>

          <div className="mt-10 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
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
                        name="requisition-no"
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
                        type="text"
                        name="requisition-no"
                        placeholder="last name"
                        id="lname"
                        onChange={formInput}
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
                        Address
                      </label>
                      <input
                        type="text"
                        name="designation"
                        id="address"
                        onChange={formInput}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
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
                        name="gender"
                        onChange={formInput}
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
                        onChange={formInput}
                        id="age"
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
                        placeholder="user@example.com"
                        id="email"
                        onChange={formInput}
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
                        id="phonenumber"
                        onChange={formInput}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="email-description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Create Password
                      </label>
                      <input
                        type="text"
                        id="password"
                        onChange={formInput}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserSignup;
