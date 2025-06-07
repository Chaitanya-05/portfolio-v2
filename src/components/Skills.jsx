// src/components/Skills.jsx
import React from 'react';
import { styles } from '../styles';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';

const Skills = () => (
  <div className="flex-center-center mt-20 flex-col">
    <h3 className={`${styles.sectionHeadText} marker text-black dark:text-white`}>Skills</h3>
    <div className="mt-2 flex flex-wrap justify-center gap-10">
      {technologies.map((tech, i) => (
        <div key={i} className="flex-around-center w-[80px] flex-col">
          <img src={tech.icon} alt={tech.name} className="w-full" />
          <p className="mt-2 text-center text-black dark:text-white">{tech.name}</p>
        </div>
      ))}
    </div>
  </div>
);

export default SectionWrapper(Skills, 'skill');
