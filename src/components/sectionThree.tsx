import React, { useEffect, useRef, useState } from 'react';
import jelly from '../images/jelly.png';
import { gsap } from 'gsap';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const SectionThree = () => {
  return (
    <div id="section3" className="relative section">
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
