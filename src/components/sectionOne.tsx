import React, { useEffect } from 'react';
import logo from '../images/logo192.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Header from './header';
gsap.registerPlugin(ScrollTrigger);
const SectionOne = () => {
  useEffect(() => {
    const sectionOneTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#section1',
        start: 'top top',
        end: '+300',
        scrub: true,
      },
    });

    sectionOneTrigger
      .fromTo(
        '.banner h1:first-child',
        { opacity: 1 },
        { color: '#FFF', fontSize: '24px', fontWeight: 500 },
        0,
      )
      .fromTo('.banner h1:last-child', { opacity: 1 }, { opacity: 0, fontSize: '24px' }, 0);
  }, []);
  return (
    <div id="section1" className="relative section">
      <Header />
      <div className="text-center absolute banner">
        <h1>The F2E 4th</h1>
        <h1>互動式網頁設計</h1>
      </div>
      <img id="insectL" className="insect" src="./images/section1-insectL.png" alt="" />
      <img id="insectR" className="insect" src="./images/section1-insectR.png" alt="" />
    </div>
  );
};

export default SectionOne;
