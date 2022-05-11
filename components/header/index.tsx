import { useState } from 'react';
import Svg from '../svg';
import ScrollLink from './scroll_link';
import DarkToggle from '../dark_toggle';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleToggle = () => setIsNavShowing((val) => !val);

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <header className="fixed w-full top-0 z-30 bg-white dark:bg-gray-dark-bg">
      <nav className="h-20 w-full border-b border-gray-200 dark:border-gray-primary">
        <ul className="max-w-screen-lg mx-auto flex flex-row items-center h-full px-2">
          <li className="block">
            <button
              type="button"
              onClick={handleHome}
              className="p-2 mx-1 font-hand text-2xl font-bold"
            >
              Alejandro Aburto S.
            </button>
          </li>
          <li className="ml-auto font-title font-medium text-lg">
            <ul
              className={`transform origin-top-right ${
                isNavShowing ? "scale-100" : "scale-0"
              } transition-transform h-screen w-screen bg-white dark:bg-gray-dark-bg flex flex-col z-40 absolute top-0 right-0 border-l border-gray-light dark:border-gray-dark-bg-light align-center justify-center sm:transform-none sm:flex-row sm:w-auto sm:h-auto sm:border-0 sm:static sm:bg-transparent`}
            >
              <li className="absolute top-4 right-3 sm:hidden">
                <button
                  type="button"
                  className="px-4 py-2"
                  onClick={handleToggle}
                  aria-label="close menu"
                >
                  <Svg name="close" className="h-7 w-7" />
                </button>
              </li>
              <ScrollLink
                name="Projects"
                target="projects"
                setIsNavShowing={setIsNavShowing}
              />
              <ScrollLink
                name="About Me"
                target="about-me"
                setIsNavShowing={setIsNavShowing}
              />
              <ScrollLink
                name="Contact"
                target="contact"
                setIsNavShowing={setIsNavShowing}
              />
              <li className="flex items-center justify-center">
                <DarkToggle />
              </li>
            </ul>
          </li>
          <li className="block sm:hidden">
            <button
              type="button"
              onClick={handleToggle}
              className="px-4 py-2 rounded"
              aria-label="open menu"
            >
              <Svg name="menu" className="h-8 w-8" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
