import { useState, useEffect } from "react";
import Navbar from "../Navber";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function DashBoard() {
  const words = ["Go Vanish", "Clear", "Easy"];
  const [index, setIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-[url('./Dashboard')] bg-cover bg-center h-screen w-full flex justify-center items-center">
        {/* content div */}
        <div className="text-white text-center m-auto xl:w-[40%] w-[90%] border rounded-xl py-8 px-3">
          <h1 className="text-4xl font-bold">
            Get All Fire Training{" "}
            <span className="text-blue-400">{words[index]}</span>
          </h1>
          <p className="mt-4">
          🔥 AI-Driven Fire Safety Training Interactive, engaging, and role-specific learning.🎬 Live Action & Animation Modules  Realistic simulations for hands-on experience.📊 Personalized Learning Paths  Tailored training based on staff roles.⚡ Instant Feedback & Assessment  Track progress and improve response skills.📅 Flexible & Accessible Training  Learn anytime, anywhere.
          {" "}
          </p>

          {/* Hide the button if user is logged in */}
          {!isLoggedIn && (
            <Link
              to="/user-signup"
              className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
            >
              Continue
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
