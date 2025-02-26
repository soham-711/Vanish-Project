import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Particles Engine Initialized", engine);
      await loadSlim(engine);
      setInit(true);
    }).catch((error) => console.error("Particle Engine Error:", error));
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: { color: "transparent" },
            fpsLimit: 60,
            particles: {
              number: { value: 100, density: { enable: true, area: 800 } },
              color: { value: "#000000" }, // White particles (dots)"#ffffff"
              shape: { type: "circle" },
              opacity: { value: 0.9, random: true },
              size: { value: 2, random: true },
              move: { enable: true, speed: 2, direction: "none", outModes: "bounce" },
              links: {
                enable: true,
                distance: 120,
                color: "#ffffff", // Black lines,
                opacity: 0.8,
                width: 1.5,
              },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "grab" },
                onClick: { enable: true, mode: "push" },
              },
            },
          }}
          className="absolute inset-0"
        />
      )}
    </div>
  );
};

export default ParticleBackground;
