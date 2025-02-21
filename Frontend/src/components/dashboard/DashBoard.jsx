import { useState, useEffect } from "react";
import Navbar from "../Navber";
import Footer from "../Footer";

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
    <div className="bg-[url('https://img.freepik.com/free-photo/fire-flame-with-sparkle-black-background_84443-7882.jpg?t=st=1739890359~exp=1739893959~hmac=1bcfd7e16afc4f5b6a1848b4d8bae3de2ba3aec598a2b15d824ee4da09133aa1&w=1060')] bg-cover bg-center h-screen w-full flex justify-center items-center">
      
      {/* content div */}
      <div className="text-white text-center m-auto xl:w-[40%] w-[90%] border rounded-xl py-8 px-3">
        <h1 className="text-4xl font-bold">
          Get All Fire Training <span className="text-blue-400">{words[index]}</span>
        </h1>
        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sit porro doloremque officiis praesentium. Aliquid aspernatur enim numquam perspiciatis id?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo voluptatum itaque officiis impedit quia quis soluta aliquid hic iste excepturi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum, omnis explicabo esse at id facilis officia rem! Cum, nam dolor! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi saepe, quod veniam provident consequuntur obcaecati commodi blanditiis voluptas eos </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default DashBoard;