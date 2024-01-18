import "./App.css";
import NearbyHospitals from "./screens/NearbyHospital/NearbyHospitals";
import Navbar from "./components/Navbar/Navbar";
import Landingpage from "./components/Landingpage/Landingpage";
import Footer from "./components/Footer/Footer";
import DoctorSignup from "./screens/Loginpage/DoctorSignup";
import DoctorLogin from "./screens/Loginpage/Doctorlogin";
import UserSignup from "./screens/Loginpage/UserSignup";
import UserLogin from "./screens/Loginpage/UserLogin";
import AboutPage from "./screens/About/About";
import Dashboard from "./screens/DDashboard/Dashboard";
import Base64ToJPEGConverter from "./components/base";
import BookAppointments from "./screens/BookApp/BookAppointments";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/base" element={<Base64ToJPEGConverter />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/nearbyhospitals" element={<NearbyHospitals />} />
        <Route path="/usersign" element={<UserSignup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/bookappointments" element={<BookAppointments />} />
        <Route path="/doctorsign" element={<DoctorSignup />} />
        <Route path="/doctorlogin" element={<DoctorLogin />} />

        {/* <UserLogin /> */}
        {/* <UserSignup /> */}
        {/* <DoctorSignup /> */}
        {/* <Landingpage /> */}
        {/* <NearbyHospitals /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
