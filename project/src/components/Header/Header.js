export default function Heador() {
  const containerStyle = {
    backgroundImage:
      "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.45)), url('https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg?w=740&t=st=1694369988~exp=1694370588~hmac=e5c563bd45976aa650e267502e646b1b9c6b3dc5b83dac19df02339e0c0d148a')",
    // Other CSS properties can be added here
    // For example, backgroundSize, backgroundRepeat, etc.
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    // ... other styles ...
  };
  return (
    <div
      className="relative isolate overflow-hidden  h-[90vh] py-24 sm:py-32"
      style={containerStyle}
    >
      {/* <img
        src="https://img.freepik.com/free-vector/abstract-medical-wallpaper-template-design_53876-61802.jpg?w=740&t=st=1694369988~exp=1694370588~hmac=e5c563bd45976aa650e267502e646b1b9c6b3dc5b83dac19df02339e0c0d148a"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2b463e] to-[#2f493d] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Bringing you the Best Healthcare!!
          </h2>
          <p className="mt-8 text-lg leading-8 text-gray-100">
            Discover Quality Care Near You! Our Healthcare Website Project
            Connects You to Nearby Hospitals Effortlessly. Your Health, Your
            Convenience. Explore, Locate, and Access Top-Notch Medical
            Facilities at Your Fingertips. Your Wellbeing is Our Mission.
          </p>
        </div>
      </div>
    </div>
  );
}
