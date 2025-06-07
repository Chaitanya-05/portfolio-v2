// src/components/Navbar.jsx
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

  const handleResume = e => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=11x4580XAC-T1B6hRk5c6Rbo6WWk9Pt9L';
    link.setAttribute('download', 'Chaitanya_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`
      ${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5
      ${scrolled ? 'bg-white opacity-95 dark:bg-primary-dark' : 'bg-transparent'}
    `}>
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          onClick={() => { setActive(''); window.scrollTo(0, 0); }}
          className="flex items-center gap-2"
        >
          <p className="text-[18px] font-bold text-black dark:text-white lg:flex">
            Chaitanya <span className="hidden sm:block ">| Full Stack Developer</span>
          </p>
        </Link>

        <ul className="hidden flex-row gap-10 sm:flex list-none items-center">
          {navLinks.map(nav => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`
        cursor-pointer text-[18px] font-medium
        ${active === nav.title
                  ? 'text-black dark:text-white'
                  : 'text-secondary dark:text-secondary-dark'}
        hover:text-black dark:hover:text-white
      `}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}

          {/* 👇 Change Theme Button moved BEFORE Resume */}
          <li>
            <IconButton
              onClick={toggleTheme}
              className="
    !text-gray-800 dark:!text-white
    !bg-gray-200 dark:!bg-transparent
    hover:!bg-gray-300 dark:hover:!bg-gray-600
    !rounded-full !p-2
  "
            >
              {theme === 'dark' ? <Brightness7 className="text-yellow-400"/> : <Brightness4 />}
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


        {/* Mobile */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <IconButton
            onClick={toggleTheme}
            className="
    !text-gray-800 dark:!text-white
    !bg-gray-200 dark:!bg-gray-700
    hover:!bg-gray-300 dark:hover:!bg-gray-600
    !rounded-full !p-2
  "
          >
            {theme === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>

          <img
            src={open ? '/assets/close.svg' : '/assets/menu.svg'}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setOpen(o => !o)}
          />
          {open && (
            <div className="black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6">
              <ul className="flex flex-col gap-4 list-none">
                {navLinks.map(nav => (
                  <li
                    key={nav.id}
                    onClick={() => { setActive(nav.title); setOpen(false); }}
                    className={`
                      cursor-pointer text-[16px] font-medium
                      ${active === nav.title
                        ? 'text-black dark:text-white'
                        : 'text-secondary dark:text-secondary-dark'}
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
                    className="!border-black dark:!border-white !text-black dark:!text-white"
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
