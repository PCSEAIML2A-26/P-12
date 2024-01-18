import React, { useState } from "react";

function Dashboard() {
  const [arequest, setArequest] = useState([
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      checked: false,
      role: "Business Relations",

      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      checked: false,
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      checked: false,
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      checked: false,
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // ... (other people)
  ]);
  const [people, setPeople] = useState([
    {
      name: "Leslie Alexander",
      email: "leslie.alexander@example.com",
      role: "Co-Founder / CEO",
      imageUrl: "...",
      checked: false, // Add a checked property for each person
    },
    {
      name: "Dries Vincent",
      email: "dries.vincent@example.com",
      checked: false,
      role: "Business Relations",

      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      email: "lindsay.walton@example.com",
      checked: false,
      role: "Front-end Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Courtney Henry",
      email: "courtney.henry@example.com",
      checked: false,
      role: "Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Tom Cook",
      email: "tom.cook@example.com",
      checked: false,
      role: "Director of Product",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // ... (other people)
  ]);

  const [totalap, setTotalap] = useState(people.length);
  const [apdone, setApdone] = useState(0);
  const [leftap, setLeftap] = useState(people.length);

  const checkbox = (index) => (e) => {
    // Create a copy of the people array
    const updatedPeople = [...people];
    // Toggle the checked property of the clicked person
    updatedPeople[index].checked = e.target.checked;
    setPeople(updatedPeople);
    console.log(e.target.checked);
    if (e.target.checked == true) {
      setApdone(apdone + 1);
      setLeftap(leftap - 1);
    } else if (e.target.checked == false) {
      setApdone(apdone - 1);
      setLeftap(leftap + 1);
    }
  };

  const approve = (e) => {
    const index = e.target.id;

    // Get the person to be approved from arequest
    const approvedPerson = arequest[index];

    // Create a copy of the people and arequest arrays
    const updatedPeople = [...people];
    const updatedArequest = [...arequest];

    // Add the approved person to the people array
    updatedPeople.push(approvedPerson);

    // Remove the approved person from the arequest array
    updatedArequest.splice(index, 1);

    // Update the state with the new arrays
    setPeople(updatedPeople);
    setArequest(updatedArequest);

    setTotalap(totalap + 1);
    setLeftap(leftap + 1);
  };

  return (
    <div className="antialiased bg-[#47878E] w-full min-h-screen text-slate-300 relative py-4">
      <div className="grid grid-cols-12 mx-auto gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-14 max-w-7xl my-10 px-2">
        <div id="content" className="bg-[#015D67] col-span-9 rounded-lg p-6">
          <div id="24h">
            <h1 className="font-bold py-4 uppercase">Today's Statistics</h1>
            <div
              id="stats"
              className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <div className="bg-[#70A2A7] to-white/5 p-6 rounded-lg">
                <div className="flex flex-row space-x-4 items-center">
                  <div id="stats-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-indigo-300 text-sm font-medium uppercase leading-4">
                      Total Appointments
                    </p>
                    <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                      <span>{totalap}</span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#70A2A7] p-6 rounded-lg">
                <div className="flex flex-row space-x-4 items-center">
                  <div id="stats-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-teal-300 text-sm font-medium uppercase leading-4">
                      Appointments Completed
                    </p>
                    <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                      <span>{apdone}</span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#70A2A7] p-6 rounded-lg">
                <div className="flex flex-row space-x-4 items-center">
                  <div id="stats-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-red-300 text-sm font-medium uppercase leading-4">
                      Appointment Left
                    </p>
                    <p className="text-white font-bold text-2xl inline-flex items-center space-x-2">
                      <span>{leftap}</span>
                      <span></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-indigo-300 text-xl mt-10 font-medium uppercase leading-4">
              Upcoming Appointments
            </p>
            <ul role="list" className="divide-y divide-gray-100">
              {people.map((person, index) => (
                <li
                  key={person.email}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-100">
                        {person.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.email}
                      </p>
                    </div>
                  </div>
                  <input
                    type="checkbox"
                    onChange={checkbox(index)} // Pass the index to identify which person to update
                    className="w-8 h-8 rounded-full"
                    checked={person.checked} // Use the checked property from the person object
                  />
                </li>
              ))}
            </ul>

            <p className="text-indigo-300 text-xl mt-10 font-medium uppercase leading-4">
              Appointment Requests
            </p>
            <ul role="list" className="divide-y divide-gray-100">
              {arequest.map((person, index) => (
                <li
                  key={person.email}
                  className="flex justify-between gap-x-6 py-5"
                >
                  <div className="flex min-w-0 gap-x-4">
                    <img
                      className="h-12 w-12 flex-none rounded-full bg-gray-50"
                      src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"
                      alt=""
                    />
                    <div className="min-w-0 flex-auto">
                      <p className="text-sm font-semibold leading-6 text-gray-100">
                        {person.name}
                      </p>
                      <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                        {person.email}
                      </p>
                    </div>
                  </div>
                  <button
                    id={index}
                    onClick={approve}
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Approve
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          id="sidebar"
          className="col-span-3 ml-6 p-4 md:py-8 md:px-4 h-[400px] bg-[#015D67] rounded-lg"
        >
          <div id="profile">
            <img
              src="https://via.placeholder.com/150"
              alt="User"
              className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 rounded-full mx-auto md:mx-0"
            />
            <h2 className="text-white text-2xl font-semibold mt-4 md:mt-6 lg:mt-8 xl:mt-10">
              John Doe
            </h2>
            <p className="text-gray-400 text-xs md:text-sm mt-1 md:mt-2 lg:mt-3 xl:mt-4">
              
            </p>
          </div>
          ``
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
