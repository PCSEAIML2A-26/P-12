import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#015D67]">
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <h3 className="text-3xl mb-3">Connect with us.</h3>
          <p>Choosing us is the smart option.</p>
          <div className="flex justify-center my-10">
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
                alt="Google Play Store"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Google Play Store</p>
              </div>
            </div>
            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-44 mx-2">
              <img
                src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
                alt="Apple App Store"
                className="w-7 md:w-8"
              />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">Download on</p>
                <p className="text-sm md:text-base">Apple App Store</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 flex flex-col flex-row justify-between items-center text-sm text-gray-400">
          <div className="order-1  md:order-2">
            <span className="px-2">About us</span>
            <span className="px-2 border-l">Contact us</span>
            <span className="px-2 border-l">Privacy Policy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
