import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import * as styles from './MaskVideoSection.module.scss';
import { useDevice } from '@/context/DeviceContext';

const shadowColors = [
  "#00d4f3", // Orange
  "#ff005b", // Gold
  "#FAF6EF", // Light cream
  "#E0DBD4"  // Beige
];

export default function SvgMaskDemo() {
  const { isMobile } = useDevice();
  const container = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });

  // Mask size animation - grows to fill entire screen and reveal full video
  let maskWidth = isMobile ? ["90vh", "1000vw"] : ["48vh", "1000vw"];
  const maskSize = useTransform(scrollYProgress, [0, 1], maskWidth);//60vh 1000vw
  
  // Transform animation after mask is revealed
  const yTransform = useTransform(scrollYProgress, [0.9, 1], ["0px", "100px"]);

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.sticky}>
        {/* Shadow Container - Multiple shadow layers */}
        <div className={styles.shadowContainer}>
          {shadowColors.map((color, index) => (
            <motion.div
              key={index}
              className={styles.shadow}
              style={{
                transform: useTransform(scrollYProgress, [0, 1], ["none", "translateY(3.5px) translateZ(0px)"]),
                zIndex: 4 - index,
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 100 100"
              >
                <path 
                  fill={color}
                  d="m50 1c0 27.062-21.938 49-49 49 27.062 0 49 21.938 49 49 0-27.062 21.938-49 49-49-27.062 0-49-21.938-49-49z" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Main video with SVG mask */}
        <motion.div
          className={styles.mask}
          style={{
            WebkitMaskSize: maskSize,
            maskSize,
            transform: yTransform,
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={require("../../assets/videos/home-masked-video.mp4")} type="video/mp4" />
          </video>
        </motion.div>

        {/* Background div with opacity animation */}
        <motion.div
          className={styles.background}
          style={{
            opacity: useTransform(scrollYProgress, [0.95, 1], [0, 1]),
          }}
        />
      </div>
    </div>
  );
}
