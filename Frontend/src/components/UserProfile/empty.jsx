import React from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

const ParticleBackground = () => {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-l from-[#b2ef3c] via-[#c8e976] to-[#fba85f]">
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 4, random: true },
          move: { enable: true, speed: 1, direction: "none", outMode: "bounce" },
          line_linked: { enable: false }, // Disable default links
          links: {
            enable: true, // Enable molecular structure effect
            distance: 120,
            color: "#ffffff",
            opacity: 0.4,
            width: 2,
          },
        },
      }}
      className="absolute inset-0"
    />
    <div className="relative flex items-center justify-center h-full text-white text-2xl font-bold">
      Chemical Bond Animation 🧪✨
    </div>
  </div>
);
};

export default ParticleBackground;
