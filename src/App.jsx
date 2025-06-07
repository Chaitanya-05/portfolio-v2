// src/App.jsx
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import Contact from './components/Contact';

const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <div className="relative z-0 bg-white dark:bg-black">
        <div className="relative">
          <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-no-repeat filter invert dark:invert-0 transition duration-300" />
          <div className="relative z-10">
            <Navbar />
            <Hero />
          </div>
        </div>

        <About />
        <Skills />
        <Works />
        <Contact />
      </div>

    </BrowserRouter>
  </ThemeProvider>
);

export default App;
