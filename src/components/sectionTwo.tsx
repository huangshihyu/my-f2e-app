import React, { useEffect, useRef, useState } from 'react';
import jelly from '../images/jelly.png';
import jellyL from '../images/jelly_l.png';
import jellyR from '../images/jelly_r.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionTwo = () => {
  const prevScrollY = useRef(0);
  const sectionTwoPosition = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const jellyRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);
  const [jellyMove, setJellyMove] = useState(0);

  useEffect(() => {
    const sectionTwoTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#section2',
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
      onStart: () => {
        // console.log('onStart position:', window.scrollY);
      },
      onComplete: () => {
        // sectionTwoTrigger.fromTo('#jelly', { opacity: '1' }, { opacity: '0' });
      },
    });
    const jellyTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '.main-info',
        start: 'top top',

        scrub: true,
      },
      onStart: () => {
        // console.log('onStart position:', window.scrollY);
      },
      onComplete: () => {
        // sectionTwoTrigger.fromTo('#jelly', { opacity: '1' }, { opacity: '0' });
      },
    });

    sectionTwoTrigger.fromTo(
      '.deformed-jelly-area',
      { transform: 'none' },
      { transform: 'scale(2.4, 0.5)' },
    );
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // offsetTop = 相對父層位置(Scroll 到這邊進入此 element)
      // offsetHeight = 此 element 高度
      if (sectionRef.current) {
        const { offsetTop, offsetHeight } = sectionRef.current;
        const isJellyMove = currentScrollY > offsetTop && currentScrollY < offsetTop + offsetHeight;

        if (isJellyMove) {
          setJellyMove(currentScrollY - offsetTop);
          console.log(currentScrollY - offsetTop);
        }
      }

      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef.current]);

  useEffect(() => {
    //  bannerRef.current?.classList.add('hide');
  }, []);
  return (
    <div id="section2" className="relative section" ref={sectionRef}>
      <div
        className="deformed-jelly-area absolute flex justify-center "
        style={{ top: `${jellyMove}px` }}
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
