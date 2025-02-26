import { useState, useEffect } from "react";
import Navbar from "../Navber";
import Footer from "../Footer";
import { Link } from "react-router-dom";

function DashBoard() {
  const words = ["Go Vanish", "Clear", "Easy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  });

  return (
    <>
      <Navbar />
      <div className="bg-[url('https://img.freepik.com/free-photo/fire-flame-with-sparkle-black-background_84443-7771.jpg?t=st=1740569045~exp=1740572645~hmac=357870df744a76c93091a940b450076cd0e14f454e7699fb6b3aa664d10d9c4d&w=1380')] bg-cover bg-center h-screen w-full flex justify-center items-center">
        {/* content div */}
        <div className="text-white text-center m-auto xl:w-[40%] w-[90%] border rounded-xl py-8 px-3">
          <h1 className="text-4xl font-bold">
            Get All Fire Training{" "}
            <span className="text-blue-400">{words[index]}</span>
          </h1>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit
            porro doloremque officiis praesentium. Aliquid aspernatur enim
            numquam perspiciatis id?Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Nemo voluptatum itaque officiis impedit quia quis
            soluta aliquid hic iste excepturi. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Harum, omnis explicabo esse at id
            facilis officia rem! Cum, nam dolor! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Eligendi saepe, quod veniam provident
            consequuntur obcaecati commodi blanditiis voluptas eos{" "}
          </p>

          <Link
            to="/user-signup"
            className="inline-block mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300 shadow-md"
          >
            Continue
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DashBoard;
