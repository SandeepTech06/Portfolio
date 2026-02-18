"use client";

import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticlesBg() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 40 },
          color: { value: "#22d3ee" },
          links: {
            enable: true,
            color: "#22d3ee",
            opacity: 0.2,
          },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}
