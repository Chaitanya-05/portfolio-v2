import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, IconButton } from '@mui/material';
import { ArrowOutward, Brightness4, Brightness7 } from '@mui/icons-material';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleResume = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1CxVOWiveV7VGhlvYFNrQs8WTbDS4dVf4';
    link.setAttribute('download', 'Chaitanya_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav
      className={`
        ${styles.paddingX} fixed top-0 z-20 w-full py-5
        ${scrolled ? 'bg-white opacity-95 dark:bg-primary-dark' : 'bg-transparent'}
      `}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          to="/"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
          className="flex items-center gap-2"
        >
          <p className="text-[18px] font-bold text-black dark:text-white">
            Chaitanya <span className="hidden sm:inline">| Full Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden list-none items-center gap-10 md:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`
                cursor-pointer text-[18px] font-medium
                ${active === nav.title ? 'text-black dark:text-white' : 'text-secondary dark:text-secondary-dark'}
                hover:text-black dark:hover:text-white
              `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          <li>
            <IconButton onClick={toggleTheme} className="!text-gray-800 dark:!text-white">
              {theme === 'dark' ? <Brightness7 className="text-yellow-400" /> : <Brightness4 />}
            </IconButton>
          </li>

          <li>
            <Button
              onClick={handleResume}
              variant="outlined"
              endIcon={<ArrowOutward />}
              className="!border-black dark:!border-white !text-black dark:!text-white"
            >
              Resume
            </Button>
          </li>
        </ul>

        {/* Mobile Nav */}
        <div className="relative flex items-center gap-2 md:hidden">
          <IconButton onClick={toggleTheme} className="!text-gray-800 dark:!text-white">
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <img
            src={open ? '/close.svg' : '/ham.svg'}
            alt="menu"
            className="h-[28px] w-[28px] object-contain cursor-pointer"
            onClick={() => setOpen((prev) => !prev)}
          />

          {open && (
            <div className="absolute right-0 top-12 z-10 w-52 rounded-xl bg-white p-6 dark:bg-[#1a1a2e] shadow-lg">
              <ul className="flex list-none flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    onClick={() => {
                      setActive(nav.title);
                      setOpen(false);
                    }}
                    className={`
                      cursor-pointer text-[16px] font-medium
                      ${active === nav.title ? 'text-black dark:text-white' : 'text-secondary dark:text-secondary-dark'}
                    `}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <Button
                    onClick={handleResume}
                    variant="outlined"
                    endIcon={<ArrowOutward />}
                    className="!border-black dark:!border-white !text-black dark:!text-white w-full"
                  >
                    Resume
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
