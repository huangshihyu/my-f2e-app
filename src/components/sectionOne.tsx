import React, { useEffect, useRef } from 'react';

import insectL from '../images/section1-insectL.png';
import insectR from '../images/section1-insectR.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
const SectionOne = () => {
  const prevScrollY = useRef(0);
  const titleRef = useRef<HTMLDivElement>(null);
  const spanRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionOneTrigger = gsap.timeline({
      scrollTrigger: {
        trigger: '#section1',
        start: 'top top',
        end: '+300',
        scrub: true,
      },
    });

    sectionOneTrigger.fromTo(
      '.banner h1:first-child',
      { opacity: 1 },
      { color: '#FFF', fontSize: '24px', fontWeight: 500 },
      0,
    );
    sectionOneTrigger.fromTo(
      '.banner h1:last-child',
      { opacity: 1 },
      { opacity: 0, fontSize: '24px' },
      0,
    );
    sectionOneTrigger.fromTo('#title', { height: 0 }, { height: '28px' }, 0);
    // 昆蟲移動
    sectionOneTrigger.fromTo('#insectL', { x: 0 }, { x: 10, y: -10 }, 0);
    sectionOneTrigger.fromTo('#insectR', { x: 0, y: 0 }, { x: 0, y: -20 }, 0);
    // class name add
    const currentScrollY = window.scrollY;

    const handleScroll = () => {
      if (titleRef.current && titleRef.current.offsetHeight === 28) {
        spanRef.current?.classList.remove('hide');
        bannerRef.current?.classList.add('hide');
      } else {
        spanRef.current?.classList.add('hide');
        bannerRef.current?.classList.remove('hide');
      }

      prevScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="section1" className="relative section">
      <header className="fixed">
        <div className="text-center title-area">
          <h1 id="title" ref={titleRef}>
            <span className="hide" ref={spanRef}>
              The F2E 4th
            </span>
          </h1>
          <button>比賽資訊</button>
          <button>攻略資源</button>
          <button>求職專區</button>
        </div>
        <div className="login-area absolute">
          <button className="button button-primary">註冊報名</button>
          <button className="button button-secondary">登入</button>
        </div>
      </header>
      <div className="text-center absolute banner">
        <h1 ref={bannerRef}>The F2E 4th</h1>
        <h1>互動式網頁設計</h1>
      </div>

      <img id="insectL" className="insect" src={insectL} alt="" />
      <img id="insectR" className="insect" src={insectR} alt="" />
    </div>
  );
};

export default SectionOne;
