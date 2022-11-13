import React, { useEffect, useRef, useState } from 'react';
import jelly from '../images/jelly.png';
import jellyL from '../images/jelly_l.png';
import jellyR from '../images/jelly_r.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionTwo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionTwoTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#section2',
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
      onStart: () => {
        console.log('1.onStart position:', window.scrollY);
      },
      onComplete: () => {
        console.log('2.onComplete position:', window.scrollY);
      },
    });
    sectionTwoTrigger.fromTo(
      '.deformed-jelly-area',
      { y: 0 },
      { transform: 'scale(2.4, 0.5)', y: 500 },
    );
    const jellyTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#section2',
        start: '+=500',
        end: '+=200',
        scrub: true,
      },
      onStart: () => {
        console.log('3.onStart position:', window.scrollY);
      },
      onComplete: () => {
        console.log('4.onComplete position:', window.scrollY);
      },
    });
    jellyTrigger.fromTo('.main-info', { opacity: 0 }, { opacity: 1 });
    jellyTrigger.fromTo(
      '.deformed-jelly:first-child',
      { x: 17, opacity: 1 },
      { x: -100, opacity: 0 },
    );
    jellyTrigger.fromTo(
      '.deformed-jelly:last-child',
      { x: -17, opacity: 1 },
      { x: 120, opacity: 0 },
    );
  }, []);
  return (
    <div id="section2" className="relative section" ref={sectionRef}>
      <div
        className="deformed-jelly-area absolute flex justify-center "
        // style={{ top: `${jellyMove}px` }}
      >
        <img src={jellyL} alt="jelly" className="deformed-jelly" />
        <img src={jellyR} alt="jelly" className="deformed-jelly" />
      </div>

      <div className="information">
        <div className="text-block">
          <p>羨慕別人的酷酷網頁動畫？</p>
        </div>
        <div className="text-block">
          <p>動畫技能樹太雜無從下手？</p>
        </div>
        <div className="text-block">
          <p>滿足不了同事的許願？</p>
        </div>
      </div>
      <div className="main-info text-center absolute  w-full">
        <h2 className="mb-3">本屆主題：互動式網頁設計</h2>
        <h2>UI 設計師 前端工程師 兩個角色進行攜手合作</h2>
      </div>
    </div>
  );
};

export default SectionTwo;
