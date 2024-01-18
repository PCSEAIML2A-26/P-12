import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function DoctorLogin() {
  const [authImage, setAuthImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);

  const webcamRef = useRef(null);

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setAuthImage(imageSrc);
  };
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const formchange = (event) => {
    if (event.target.id === "usename") {
      setUsername(event.target.value);
    }
    if (event.target.id === "password") {
      setpassword(event.target.value);
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=740&t=st=1694369852~exp=1694370452~hmac=c3135fb8923fb41baf279d3728afddda7038eac29b0c200217a45cbf218eac7f')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">Doctor</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-emerald-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                id="username"
                onChange={formchange}
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-emerald-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                id="password"
                onChange={formchange}
                name="password"
                placeholder="*********"
              />
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
                    type="submit"
                    className="rounded-3xl bg-emerald-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-emerald-900 mt-4"
                  >
                    Submit
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowCamera(true)}
                  className="rounded-3xl bg-emerald-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-emerald-900"
                >
                  Authenticate
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
