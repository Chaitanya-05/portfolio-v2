import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { ArrowOutward } from "@mui/icons-material";
import { Button } from "@mui/material";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const downloadAndOpen = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior

    // Open the PDF in a new tab
    window.open(
      "https://drive.google.com/file/d/11x4580XAC-T1B6hRk5c6Rbo6WWk9Pt9L/view?usp=sharing",
      "_blank",
    );

    // Trigger the download
    const downloadLink = document.createElement("a");
    downloadLink.href =
      "https://drive.google.com/uc?export=download&id=11x4580XAC-T1B6hRk5c6Rbo6WWk9Pt9L";
    downloadLink.download = ""; // Optional: specify a filename
    document.body.appendChild(downloadLink); // Append the link to the body
    downloadLink.click(); // Trigger the download
    document.body.removeChild(downloadLink); // Remove the link after downloading
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            Chaitanya &nbsp;
            <span className="hidden sm:block"> | MERN Stack Developer</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } cursor-pointer text-[18px] font-medium hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
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
            </li>
        </ul>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={
              toggle
                ? "https://mern-rajesh-portfolio.web.app/assets/close.svg"
                : "https://mern-rajesh-portfolio.web.app/assets/menu.svg"
            }
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins cursor-pointer text-[16px] font-medium ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
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
            </ul>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
