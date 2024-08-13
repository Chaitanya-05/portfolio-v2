import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Button } from "@mui/material";
import { Email, LinkedIn, GitHub, ArrowOutward } from "@mui/icons-material";

const Contact = () => {
  const downloadAndOpen = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior

    // Open the PDF in a new tab
    window.open('https://drive.google.com/file/d/11x4580XAC-T1B6hRk5c6Rbo6WWk9Pt9L/view?usp=sharing', '_blank');

    // Trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = 'https://drive.google.com/uc?export=download&id=11x4580XAC-T1B6hRk5c6Rbo6WWk9Pt9L';
    downloadLink.download = ''; // Optional: specify a filename
    document.body.appendChild(downloadLink); // Append the link to the body
    downloadLink.click(); // Trigger the download
    document.body.removeChild(downloadLink); // Remove the link after downloading
  };


  return (
    <>
      <div className="flex flex-col-reverse gap-10 overflow-hidden md:mt-12 md:flex-row ">
        <motion.div
          variants={slideIn("left", "tween", 0.1, 0.5)}
          className="flex-[0.75] rounded-2xl bg-black-100 p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <div className="flex-center-center mt-8 flex-wrap gap-2">
            <div>
              <a href="mailto:cdakhale@gmail.com">
                <Button variant="outlined" endIcon={<Email />}>
                  Email
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/chaitanyadakhale/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<LinkedIn />}>
                  LinkedIn
                </Button>
              </a>
            </div>
            <div>
              <a
                href="https://github.com/Chaitanya-05"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outlined" endIcon={<GitHub />}>
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.5)}
          className="md:h-auto md:flex-1"
        >
          <img
            src="https://mern-rajesh-portfolio.web.app/assets/contact.jpeg"
            alt="contact-us"
            className="h-full w-full object-contain"
          />
        </motion.div>
      </div>
      <div className="mb-4 ml-5">
        <h1 className="my-3  text-xl font-semibold text-slate-50">
          Thanks for scrolling.
        </h1>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/11x4580XAC-T1B6hRk5c6Rbo6WWk9Pt9L/view?usp=sharing"
            onClick={downloadAndOpen}
          >
            <Button variant="outlined" endIcon={<ArrowOutward />}>
              Resume
            </Button>
          </a>
        </div>
      </div>
      <hr className="ml-2" />
    </>
  );
};

export default SectionWrapper(Contact, "contact");
