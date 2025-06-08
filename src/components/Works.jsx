// src/components/Works.jsx
import React from 'react';
import { styles } from "../styles";
import { motion } from 'framer-motion';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ProjectCard = ({ index, name, description, tags, image, alt, source_code_link, live_link }) => (
  <motion.div variants={fadeIn('up','spring', index * 0.1 + 0.3, 0.7)}>
    <div className="w-full rounded-2xl bg-gray-100 dark:bg-tertiary p-5 sm:w-[360px]">
      <div className="relative h-[230px] w-full">
        <img src={image} alt={alt} className="h-full w-full rounded-2xl object-cover" />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end gap-1">
          <div
            onClick={() => window.open(live_link,'_blank')}
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img src="/webLink.png" alt="live" className="h-full w-full object-contain" />
          </div>
          <div
            onClick={() => window.open(source_code_link,'_blank')}
            className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
          >
            <img src="github.png" alt="code" className="h-3/4 w-3/4 object-contain" />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-[24px] font-bold text-black dark:text-white">{name}</h3>
        <p className="mt-2 text-[14px] text-secondary dark:text-secondary-dark">{description}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag,i) => (
          <p key={i} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = () => (
  <>
          <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3  text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>
    <div className="flex-around-center mt-20 flex-wrap gap-7">
      {projects.map((p,i) => <ProjectCard key={i} index={i} {...p} />)}
    </div>
  </>
);

export default SectionWrapper(Works, 'work');
