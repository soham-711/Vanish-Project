import DashBoard from "./components/dashboard/DashBoard";
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TrainingHub from "./components/TrainingHub/TrainingHub";

import User from "./components/UserProfile/User";
import ParticleBackground from "./components/UserProfile/empty";
import CopyrightPage from "./components/Copyright/Copyright";
import Developers from "./components/About_Details/Details";
import Diagram from "./components/ChartData/Diagram";
import Admin from "./components/Admin_Panel/Admin";

import Contactus from "./components/Contact/Contact_us";
import TrainingHubForStaff from "./components/TrainingHubForStaff/TrainingHubForStaff";
import AboutUs from "./components/AboutUs/AboutUs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/home" element={<Home />} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/training-hub" element={<TrainingHub />} />
      <Route path="/Contactus" element={<Contactus />} />
      <Route path="/User" element={<User/>}/>

      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/traininghub-for-staff" element={<TrainingHubForStaff/>}/>
      <Route path="/empty" element={<ParticleBackground/>}></Route>
 <Route path="/copyright" element={<CopyrightPage/>}></Route>
 <Route path="/details" element={<Developers/>}></Route>
      <Route path="/diagram" element={<Diagram/>}></Route>
      <Route path="/admin" element={<Admin />} />

    </Routes>
  );
} 

export default App;
