// src/components/ParticlesContainer.jsx
import React, { useCallback } from 'react';
import { Particles } from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesContainer = () => {
  const init = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const opts = {
    fullScreen: { enable: false },
    background: { color: { value: '' } },
    fpsLimit: 120,
    interactivity: {
      events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
      modes: { repulse: { distance: 200, duration: 0.4 } }
    },
    particles: {
      color: { value: document.documentElement.classList.contains('dark') ? '#f5d393' : '#e68e2e' },
      links: {
        color: document.documentElement.classList.contains('dark') ? '#e68e2e' : '#f5d393',
        distance: 150, enable: true, opacity: 0.5, width: 1
      },
      move: { enable: true, speed: 1, outModes: { default: 'bounce' } },
      number: { density: { enable: true, area: 800 }, value: 80 },
      opacity: { value: 0.5 }, shape: { type: 'circle' },
      size: { value: { min: 1, max: 5 } },
    },
    detectRetina: true,
  };

  return <Particles id="tsparticles" init={init} options={opts} className="absolute h-full w-full" />;
};

export default ParticlesContainer;
