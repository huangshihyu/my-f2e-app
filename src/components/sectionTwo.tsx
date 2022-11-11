import React, { useEffect } from 'react';
import logo from '../images/logo192.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionTwo = () => {
  return (
    <div id="section2" className="relative section">
      <header className="App-header">
        <img src={logo} className="App-lloo" alt="logo" />
        <p>換section2</p>
      </header>
    </div>
  );
};

export default SectionTwo;
