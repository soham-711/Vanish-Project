import DashBoard from "./components/dashboard/DashBoard";
import UserSignup from "./components/UserSignup";
import UserLogin from "./components/UserLogin";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import TrainingHub from "./components/TrainingHub/TrainingHub";

import User from "./components/UserProfile/User";
import CopyrightPage from "./components/Copyright/Copyright";
import Developers from "./components/About_Details/Details";
import Diagram from "./components/ChartData/Diagram";
import Admin from "./components/Admin_Panel/Admin";

import Contactus from "./components/Contact/Contact_us";
import TrainingHubForStaff from "./components/TrainingHubForStaff/TrainingHubForStaff";
import AboutUs from "./components/AboutUs/AboutUs";
import FireTrainingGame from "./components/games/FireTrainingGame";
import Userprotected from "./components/userprotected/Userprotected";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/home" element={<Userprotected><Home /></Userprotected>} />
      <Route path="/user-login" element={<UserLogin />} />
      <Route path="/user-signup" element={<UserSignup />} />
      <Route path="/training-hub" element={ <Userprotected><TrainingHub /></Userprotected>} />
      <Route path="/Contactus" element={<Userprotected><Contactus /></Userprotected>} />
      <Route path="/user" element={<Userprotected><User /></Userprotected>} />

      <Route path="/aboutus" element={<Userprotected><AboutUs /></Userprotected>} />
      <Route path="/traininghub-for-staff" element={<Userprotected><TrainingHubForStaff /></Userprotected>} />
      <Route path="/copyright" element={<Userprotected><CopyrightPage /></Userprotected>}></Route>
      <Route path="/details" element={<Userprotected><Developers /></Userprotected>}></Route>
      <Route path="/diagram" element={<Userprotected><Diagram /></Userprotected>}></Route>
      <Route path="/admin" element={<Userprotected><Admin /></Userprotected>} />
      <Route path="/game" element={<Userprotected><FireTrainingGame/></Userprotected>} />
    </Routes>
  );
}

export default App;
