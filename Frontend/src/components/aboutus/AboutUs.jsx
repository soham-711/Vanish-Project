import Navbar from "../Navber";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 

function AboutUs() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div
      className="relative w-full min-h-screen flex flex-col text-white">
      {/* Particle Effect */}
      {init && (
        <Particles
          id="tsparticles"
          options={{
            // background: { color: { value: "#290101" } }// 
            background: { 
              image: "linear-gradient(to left bottom, #67600b, #644810, #573316, #432219, #2a1616, #261213, #220e10, #1f080d, #2e0c11, #3d0c11, #4d0d0e, #5b0f07)", // Gradient background
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: { enable: true, mode: "push" },
                onHover: { enable: true, mode: "repulse" },
                resize: true,
              },
              modes: {
                push: { quantity: 4 },
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            particles: {
              color: { value: "#f2f2f2" },
              links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
              move: { direction: "none", enable: true, outModes: { default: "bounce" }, speed: 6 },
              number: { density: { enable: true, area: 800 }, value: 80 },
              opacity: { value: 0.5 },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 5 } },
            },
            detectRetina: true,
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0] bg-cover bg-center bg-opacity-60"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <Navbar />
        <div className="text-center py-12 mt-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#ffcc00]">About Vanish</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
            Vanish is dedicated to fire safety education, providing expert training and innovative solutions to protect lives and properties from fire hazards. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nulla ipsam magni ut inventore labore ea delectus nihil vero atque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nam quibusdam dicta ea vel illo totam explicabo odit, quae commodi.
          </p>
        </div>

        {/* About & Mission Section */}
        <div className="flex flex-col md:flex-row w-full mt-8 gap-6 px-6 md:px-12">

        <div className="flex flex-col border border-gray-300 bg-[#9c2d2d] bg-opacity-90 rounded-xl p-6 shadow-xl flex-1">
            <h2 className="text-3xl font-semibold text-[#ffcc00]">Why Choose Us?</h2>
            <p className="mt-2 text-gray-200">
              Our expert-led programs, real-world simulations, and latest fire safety technologies make us a trusted partner.
              Vanish is dedicated to fire safety education, providing expert training and innovative solutions to protect lives and properties from fire hazards. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nulla ipsam magni ut inventore labore ea delectus nihil vero atque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nam quibusdam dicta ea vel illo totam explicabo odit, quae commodi.
            </p>
          </div>

          <div className="flex flex-col border border-gray-300 bg-[#9c2d2d] bg-opacity-90 rounded-xl p-6 shadow-xl flex-1">
            <h2 className="text-3xl font-semibold text-[#ffcc00]">Our Mission</h2>
            <p className="mt-2 text-gray-200">
              We strive to educate and empower individuals and businesses with fire prevention strategies.
              Vanish is dedicated to fire safety education, providing expert training and innovative solutions to protect lives and properties from fire hazards. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores nulla ipsam magni ut inventore labore ea delectus nihil vero atque?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit nam quibusdam dicta ea vel illo totam explicabo odit, quae commodi.
            </p>
          </div>
        </div>

        {/* What We Offer Section */}
        <div className="py-12 text-center">
          <h1 className="text-4xl font-bold text-[#ffcc00]">What We Offer</h1>

          <div className="flex flex-wrap justify-center gap-8 mt-8 px-6">
            {/* Card 1 */}
            <div className="card bg-[#222] bg-opacity-90 w-96 shadow-xl rounded-xl transition-transform transform hover:scale-105">
              <figure className="rounded-t-xl overflow-hidden">
                <img src="/Aboutus1.jpg" alt="Fire Safety Training" className="w-full"/>
              </figure>
              <div className="card-body py-3">
                <h2 className="card-title text-[#ffcc00]">Fire Safety Training</h2>
                <p>Hands-on fire safety training with certified professionals.</p>
                <button className="border p-2 rounded-lg mt-1.5 cursor-pointer">Learn More</button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card bg-[#222] bg-opacity-90 w-96 shadow-xl rounded-xl transition-transform transform hover:scale-105">
              <figure className="rounded-t-xl overflow-hidden">
                <img src="/aboutus2.jpg" alt="Fire Extinguisher Services" className="w-full"/>
              </figure>
              <div className="card-body py-3">
                <h2 className="card-title text-[#ffcc00]">Fire Extinguisher Services</h2>
                <p>Installation, maintenance, and refilling of fire extinguishers.</p>
                <button className="border p-2 rounded-lg mt-1.5 cursor-pointer">Learn More</button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card bg-[#222] bg-opacity-90 w-96 shadow-xl rounded-xl transition-transform transform hover:scale-105">
              <figure className="rounded-t-xl overflow-hidden">
                <img src="/aboutus3.jpg" alt="Fire Risk Assessment" className="w-full"/>
              </figure>
              <div className="card-body py-3">
                <h2 className="card-title text-[#ffcc00]">Fire Risk Assessment</h2>
                <p>Professional fire risk analysis to ensure safety standards.</p>
                <button className="border p-2 rounded-lg mt-1.5 cursor-pointer">Learn More</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="w-full flex flex-col items-center bg-black bg-opacity-70 px-6 py-12">
          <h2 className="text-3xl font-bold text-[#ffcc00]">Stay Safe with Vanish</h2>
          <p className="mt-2 text-gray-300">Want to learn more about fire safety? Contact us today.</p>
          <a href="/contactus" className="mt-4 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
