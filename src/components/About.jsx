// src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const About = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-secondary dark:text-secondary-dark`}>
        Introduction
      </p>
      <h2 className={`${styles.sectionHeadText} text-black dark:text-white`}>Overview.</h2>
    </motion.div>
    <motion.p
      variants={fadeIn('', '', 0.1, 1)}
      className="mt-4 max-w-3xl text-[17px] leading-[30px] text-black dark:text-white"
    >
      I'm a skilled software developer with experience in JavaScript, and expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm a quick learner and collaborate closely with clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life!
    </motion.p>
  </>
);

export default SectionWrapper(About, 'about');
