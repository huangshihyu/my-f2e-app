import React, { useEffect, useRef, useState } from 'react';
import jelly from '../images/jelly.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionThree = () => {
  const prevScrollY = useRef(0);
  const sectionTwoPosition = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [jellyMove, setJellyMove] = useState(0);
  useEffect(() => {
    const currentScrollY = window.scrollY;
    const sectionTwoTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#section2',
        start: 'top top',
        end: '200px center',
        scrub: true,
      },
      // onStart: () => {
      //   console.log('onStart section1');
      //   sectionTwoPosition.current = currentScrollY;
      // },
      // onComplete: () => {
      //   console.log('onComplete section1');
      // },
    });

    sectionTwoTrigger.fromTo('.jelly', { transform: 'none' }, { transform: 'scale(2, 0.5)' }, 0);
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // console.log(sectionRef);
      // offsetTop = 相對父層位置(Scroll 到這邊進入此 element)
      // offsetHeight = 此 element 高度
      console.log(currentScrollY);
      if (sectionRef.current) {
        const { offsetTop, offsetHeight } = sectionRef.current;
        const isJellyMove = currentScrollY > offsetTop && currentScrollY < offsetTop + offsetHeight;

        if (isJellyMove) {
          setJellyMove(currentScrollY - offsetTop);
        }
        // console.log(sectionRef);
      }

      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionRef.current]);
  return (
    <div id="section3" className="relative section" ref={sectionRef}>
      <img src={jelly} className="jelly absolute" alt="jelly" style={{ top: `${jellyMove}px` }} />
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
    </div>
  );
};

export default SectionThree;
