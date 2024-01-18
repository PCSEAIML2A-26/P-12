import React from "react";

function UserLogin() {
  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-cyan-800 to-cyan-900 bg-cover bg-no-repeat"
      style={{
        background: "",
        backgroundImage:
          "url('https://img.freepik.com/free-vector/clean-medical-background_53876-97927.jpg?w=740&t=st=1694369852~exp=1694370452~hmac=c3135fb8923fb41baf279d3728afddda7038eac29b0c200217a45cbf218eac7f')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <h1 className="mb-2 text-2xl">User</h1>
            <span className="text-gray-300">Enter Login Details</span>
          </div>
          <form action="#">
            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-emerald-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="text"
                name="name"
                placeholder="id@email.com"
              />
            </div>

            <div className="mb-4 text-lg">
              <input
                className="rounded-3xl border-none bg-emerald-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type="password"
                name="password"
                placeholder="*********"
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-emerald-600 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-emerald-900"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserLogin;
