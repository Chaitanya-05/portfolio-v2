// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, useMediaQuery } from '@mui/material';
import ParticlesContainer from './ParticlesContainer';
import { textVariant } from '../utils/motion';
import { styles } from '../styles';

const Hero = () => {
  const isSmall = useMediaQuery('(max-width:640px)');

  return (
    <section className="relative mx-auto flex h-screen w-full flex-col items-center justify-between">
      <ParticlesContainer />
      <div className={`top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 mt-24 `}>
        <div className={`mt-5 flex flex-col items-center justify-center ${isSmall && 'mt-52'}`}>
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        <div className='flex flex-col-reverse'>

          <motion.div variants={textVariant()}>
            <h1 className={`${styles.heroHeadText} text-black dark:text-white`}>
              Hi, <br /><span className="">I’m <span className="text-[#915EFF]">Chaitanya</span></span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-black dark:text-white`}>
              I am a <span className="gradient-text">full stack developer</span>
            </p>
          </motion.div>
          <motion.div
            variants={textVariant()}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="z-[1]"
          >
            <Avatar
              alt="Chaitanya"
              src="./myImage1.jpeg"
              sx={isSmall
                ? { width: 200, height: 200 }
                : { width: 250, height: 250 }}
            />
          </motion.div>
        </div>
      </div>
      <div className="flex-center-center mb-40 w-full ">
        <a href="#about">
          <div className="flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 border-secondary dark:border-secondary-dark p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="mb-1 h-3 w-3 rounded-full bg-secondary dark:bg-secondary-dark"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
