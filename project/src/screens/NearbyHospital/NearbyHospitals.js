import React, { useEffect, useState } from "react";
import "./Nearby.css";
import copy from "clipboard-copy";
import { Link } from "react-router-dom";

function NearbyHospitals() {
  const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
  const [hospitals, setHospitals] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [directions, setDirections] = useState(null);
  const [map, setMap] = useState(null); // Reference to the Google Map

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  useEffect(() => {
    if (userLocation.lat !== 0 && userLocation.lng !== 0) {
      const mapInstance = new window.google.maps.Map(
        document.getElementById("map"),
        {
          center: userLocation,
          zoom: 15,
        }
      );

      setMap(mapInstance);

      const service = new window.google.maps.places.PlacesService(mapInstance);

      // Search for hospitals
      service.nearbySearch(
        {
          location: userLocation,
          radius: 5000,
          type: "hospital",
        },
        displayHospitals
      );

      // Search for pharmacies
      service.nearbySearch(
        {
          location: userLocation,
          radius: 5000,
          type: "pharmacy",
        },
        displayPharmacies
      );

      // Add a marker for the user's location
      new window.google.maps.Marker({
        position: userLocation,
        map: mapInstance,
        title: "Your Location",
      });
    }
  }, [userLocation]);

  useEffect(() => {
    // Initialize the DirectionsRenderer once
    if (map && !directionsRenderer) {
      const directionsRendererInstance =
        new window.google.maps.DirectionsRenderer({
          map: map,
          panel: document.getElementById("directions-panel"), // Display directions as text here
        });
      setDirectionsRenderer(directionsRendererInstance);
    }
  }, [map, directionsRenderer]);

  const displayHospitals = (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setHospitals(results);
    }
  };

  const displayPharmacies = (results, status) => {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setPharmacies(results);
    }
  };

  const calculateAndDisplayRoute = (destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: userLocation,
        destination: destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      function (response, status) {
        if (status === "OK") {
          // Clear previous directions
          directionsRenderer.setDirections({ routes: [] });
          setDirections(response);
          directionsRenderer.setDirections(response); // Display directions on the map
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  };

  const calculateDistance = (p1, p2) => {
    return window.google.maps.geometry.spherical.computeDistanceBetween(p1, p2);
  };
  {
    /* <div>
    <h3 className="mt-6 text-2xl font-semibold">Selected Place:</h3>
    <p>{selectedPlace.name}</p>
    <p>{selectedPlace.vicinity}</p>
  </div> */
  }
  return (
    <div className="bg-[#47878E]">
      <div id="map" style={{ height: "500px" }}></div>
      <div id="directions-panel"></div>
      <div className="ml-2">
        {selectedPlace && (
          <div class="w-[350px] gap-2 grid  grid-cols-1">
            <div></div>
            <div class="group relative rounded-lg overflow-hidden bg-white  hover:shadow-2xl ">
              <div class="h-40">
                <img
                  src="https://img.freepik.com/premium-vector/hospital-building-healthcare-cartoon-background-vector-illustration-with-ambulance-car-doctor-patient-nurses-medical-clinic-exterior_2175-1515.jpg"
                  alt="City"
                  class="h-40 w-full object-cover object-center "
                />
              </div>
              <div class="h-1/2 p-4 ">
                <h3 class="mb-2 text-base font-semibold text-blue-800">
                  <a href="" class="hover:underline">
                    Selected place
                  </a>
                </h3>
                <p class="text-sm font-bold text-orange-500">
                  {selectedPlace.name}
                </p>
                <p class="text-sm font-bold text-orange-500">
                  {selectedPlace.vicinity}
                </p>
                <div class="flex flex-row justify-between text-xs mt-2"></div>
              </div>
            </div>

            <div></div>
          </div>
        )}
        <h3 className="mt-6 text-2xl font-semibold text-[#FAFCFC]">
          Nearby Hospitals:
        </h3>
        <ul className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
          {hospitals.map((hospital, index) => (
            <li key={index}>
              <div
                className="flex items-center w-full p-2 lg:rounded-full md:rounded-full bg-[#ADC9CD] hover:bg-gray-100 cursor-pointer border-2 rounded-lg font-semibold"
                onClick={() => {
                  calculateAndDisplayRoute(hospital.geometry.location);
                  setSelectedPlace(hospital);
                }}
              >
                <div class="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div>
                {`${hospital.name} ( ${(
                  calculateDistance(userLocation, hospital.geometry.location) /
                  1000
                ).toFixed(2)} Kms )`}
                <button
                  type="button"
                  class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  onClick={() => {
                    // Copy the hospital name to the clipboard
                    copy(hospital.name);
                    alert("Name copied to Clipboard");
                  }}
                >
                  Copy Name
                </button>
                <Link to="/bookappointments">
                  <button
                    type="button"
                    class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                  >
                    Book Slot
                  </button>
                </Link>
                <button
                  type="button"
                  class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                  Get Directions
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="mt-6 ml-2 text-2xl font-semibold text-[#FAFCFC]">
          Nearby Pharmacies:
        </h3>
        <ul className="flex flex-col gap-4 lg:p-4 p-2  rounde-lg m-2">
          {hospitals.map((pharmacy, index) => (
            <li key={index}>
              <div
                className="flex items-center w-full p-2 lg:rounded-full md:rounded-full bg-[#ADC9CD] hover:bg-gray-100 cursor-pointer border-2 rounded-lg font-semibold"
                onClick={() => {
                  calculateAndDisplayRoute(pharmacy.geometry.location);
                  setSelectedPlace(pharmacy);
                }}
              >
                <div class="h-12 w-12 mb-2 lg:mb-0 border md:mb-0 rounded-full mr-3"></div>
                {`${pharmacy.name} ( ${(
                  calculateDistance(userLocation, pharmacy.geometry.location) /
                  1000
                ).toFixed(2)} Kms )`}

                <button
                  type="button"
                  class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
                >
                  Get Directions
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NearbyHospitals;
