import React, { useState, useRef } from "react";
import Webcam from "react-webcam";
import axios from "axios";

function DoctorSignup() {
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
  const [info, setInfo] = useState([]);

  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setAuthImage(imageSrc);
    setphoto(imageSrc);
  };

  const handleAuthenticateClick = () => {
    setShowCamera(true);
  };

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
    if (event.target.id === "speciality") {
      setSpeciality(event.target.value);
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
    if (event.target.id === "qualification") {
      setQualification(event.target.value);
    }
    if (event.target.id === "experience") {
      setexperience(event.target.value);
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
    setInfo([
      fname,
      lname,
      dob,
      speciality,
      hname,
      gender,
      age,
      qualification,
      experience,
      email,
      phonenumber,
      photo,
      password,
    ]);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(info);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/doctors", {
        // Pass the doctor's data as an object here
        fname,
        lname,
        dob,
        speciality,
        hname,
        gender,
        age,
        qualification,
        experience,
        email,
        phonenumber,
        photo,
        password,
      });

      // Handle success (e.g., show a success message or redirect)
      console.log("Data submitted successfully:", response.data);
    } catch (error) {
      // Handle errors (e.g., show an error message)
      console.error("Error submitting data:", error);
    }
  };
  return (
    <div>
      <div className="w-full h-14 pt-2 text-center bg-gray-700 shadow overflow-hidden font-bold text-3xl text-white">
        Doctor Sign Up
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
                      required
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
                      required
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
                      required
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
                      Speciality
                    </label>
                    <input
                      required
                      type="text"
                      name="designation"
                      id="speciality"
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
                    <input
                      required
                      type="text"
                      name="designation"
                      id="hospitalname"
                      onChange={formInput}
                      autoComplete="family-name"
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
                      required
                      type="text"
                      name="age"
                      placeholder="Above 18"
                      id="age"
                      onChange={formInput}
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="academic-qualification"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Academic Qualification
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="MBBS/"
                      id="qualification"
                      onChange={formInput}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="required-experience"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Experience
                    </label>
                    <input
                      required
                      type="text"
                      name="required-experience"
                      placeholder="2 years or above"
                      id="experience"
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
                      required
                      type="email"
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
                      Set Password
                    </label>
                    <input
                      required
                      type="text"
                      id="password"
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
                      required
                      type="number"
                      name="number"
                      id="phonenumber"
                      onChange={formInput}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  {/* ... other form fields ... */}

                  {/* Display the selected image */}
                  {authImage && (
                    <div className="col-span-6 sm:col-span-6">
                      <img
                        src={authImage}
                        alt="Selected Profile"
                        className="mt-2 w-32 h-32 rounded-full mx-auto"
                      />
                    </div>
                  )}
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
              <div className="mt-8 flex flex-col items-center">
                {showCamera ? (
                  <div>
                    <Webcam
                      audio={false}
                      height={360}
                      ref={webcamRef}
                      screenshotFormat="image/jpeg"
                      width={480}
                    />
                    <button
                      required
                      onClick={captureImage}
                      className="rounded-3xl bg-emerald-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-emerald-900 mt-4"
                    >
                      Capture Image
                    </button>
                    {authImage && (
                      <div className="mt-4">
                        <img src={authImage} alt="Authenticated" />
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => setShowCamera(false)}
                      className="rounded-3xl bg-emerald-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-emerald-900 mt-4"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleAuthenticateClick}
                    className="rounded-3xl bg-emerald-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-emerald-900"
                  >
                    Authenticate
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorSignup;
