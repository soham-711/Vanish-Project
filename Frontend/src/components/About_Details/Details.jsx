import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const developers = [
  {
    name: "Soham Biswas",
    role: "FullStack",
    image: "./images1.jpg",
    linkedin: "http://linkedin.com/in/sohambiswas",
    email: "Vanish_saikat@gmail.com",
  },
  {
    name: "Sagnik Dutta",
    role: "Hardware",
    image: "./images2.jpg",
    linkedin: "http://linkedin.com/in/anishmaji",
    email: "Vanish_saikat@gmail.com",
  },
  {
    name: "Dhrupad Pal",
    role: "Developer",
    image: "./images3.jpg",
    linkedin: "http://linkedin.com/in/rahulsen",
    email: "Vanish_saikat@gmail.com",
  },
  {
    name: "Ananya Priya",
    role: "UI/UX Designer",
    image: "./images4.png",
    linkedin: "http://linkedin.com/in/sinchanghosh",
    email: "Vanish_saikat@gmail.com",
  },
];

const Developers = () => {
  return (
    <div
      className="min-h-screen py-12 px-6"
      style={{
        backgroundImage:
          "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)",
          
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-white">Meet Our Developers 🚀</h1>
        <p className="text-gray-200 text-lg mt-2">
          A team of passionate developers, designers, and engineers.
        </p>

        {/* Gradient Divider */}
        <div
          className="w-full h-[4px] mt-4"
          style={{
            backgroundImage:
              "radial-gradient(circle, #1fff05, #74fa23, #9cf53a, #b9f151, #ceec67, #d8e15f, #e0d75b, #e6cc58, #ecb638, #f29d19, #f98000, #ff5d00)",
          }}
        ></div>
      </motion.div>

      {/* Developer Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {developers.map((dev, index) => (
          <motion.div
  key={index}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: index * 0.2,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.1,
    transition: { duration: 0.3, ease: "easeInOut" },
  }}
  className="shadow-lg rounded-xl p-6 text-center border hover:shadow-2xl transition-all duration-300"
  style={{
    backgroundImage:
"   linear-gradient(to left bottom, #52fc25, #34fe68, #22fe93, #35fdb5, #5afbcf, #65f8e6, #80f4f4, #9feffa, #b6e9fd, #cce3f6, #dadeea, #dddddd)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

            <img
              src={dev.image}
              alt={dev.name}
              className="w-28 h-28 rounded-full mx-auto border-4 border-gray-300"
            />
            <h2 className="text-xl font-semibold mt-4 text-gray-800">
              {dev.name}
            </h2>
            <p className="text-gray-600">{dev.role}</p>

            <div className="flex justify-center gap-4 mt-4">
              <Link
                to={dev.linkedin}
                target="_blank"
                className="text-blue-600 hover:text-blue-800 transition duration-300 flex items-center gap-2"
              >
                <FaLinkedin size={20} /> LinkedIn
              </Link>
              <a
                href={`mailto:${dev.email}`}
                className="text-red-500 hover:text-red-700 transition duration-300 flex items-center gap-2"
              >
                <FaEnvelope size={20} /> Email
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Developers;
