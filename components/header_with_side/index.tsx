import React, { useState } from 'react';
import * as ROUTES from '../../data/routes.json';
import DarkToggle from '../dark_toggle';
import SideNav from '../side_nav';
import Svg from '../svg';
import styles from './styles.module.scss';
import { IAnchor } from '../../types';

interface HeaderSimpleProps {
  anchors: IAnchor[]
}

const HeaderWithSide = ({ anchors }: HeaderSimpleProps) => {
  const [isSideShowing, setIsSideShowing] = useState(false);

  function handleToggle() {
    setIsSideShowing(true);
  }

  return (
    <>
      <header className="fixed w-full top-0 z-30 bg-white dark:bg-gray-dark-bg">
        <nav className="h-20 w-full border-b border-gray-200 dark:border-gray-primary">
          <ul className="max-w-screen-lg mx-auto flex flex-row items-center h-full px-2">
            <li className="block">
              <a
                href={ROUTES.home}
                className="p-2 mx-1 font-hand text-2xl font-bold"
              >
                Alejandro Aburto S.
              </a>
            </li>
            <li className="items-center justify-center ml-auto hidden sm:flex">
              <DarkToggle />
            </li>
            <li
              className={`${
                !isSideShowing ? "block" : "hidden"
              } sm:hidden ml-auto`}
            >
              <button
                type="button"
                onClick={handleToggle}
                className="px-4 py-2 rounded"
                aria-label="open menu"
              >
                <Svg name="menu" className="h-8 w-8" />
              </button>
            </li>
            <li
              className={`${
                isSideShowing ? "block" : "hidden"
              } sm:hidden ml-auto`}
            >
              <button
                type="button"
                onClick={handleToggle}
                className="px-4 py-2 rounded"
                aria-label="close menu"
              >
                <Svg name="close" className="h-8 w-8" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
      {anchors && (
        <SideNav
          anchors={anchors}
          isSideShowing={isSideShowing}
          setIsSideShowing={setIsSideShowing}
        />
      )}
    </>
  );
}

export default HeaderWithSide;

HeaderWithSide.defaultProps = {
  anchors: [],
};
