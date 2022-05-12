import React, { MouseEvent, SyntheticEvent, useEffect, useRef } from 'react';
import SideNavLink from '../side_nav_link';
import DarkToggle from '../../dark_toggle';
import styles from './styles.module.scss';
import { IAnchor } from '../../../types';

interface SideNavProps {
  anchors: IAnchor[];
  isSideShowing: boolean;
  setIsSideShowing: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SideNav({ anchors, isSideShowing, setIsSideShowing }: SideNavProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeMenu = (event: globalThis.MouseEvent) => {

      const element = event.currentTarget as Element;

      if (element.tagName === 'A') {
        return setIsSideShowing(false);
      }

      if (navRef.current && !navRef.current.contains(element)) {
        setIsSideShowing(false);
      }
    }

    if (isSideShowing) {
      window.addEventListener('click', closeMenu);
    } else {
      window.removeEventListener('click', closeMenu);
    }

    return () => window.removeEventListener('click', closeMenu);
  }, [isSideShowing, setIsSideShowing]);

  const AnchorsComponent = anchors.map((anchor) => (
    <SideNavLink name={anchor.name} target={anchor.target} key={anchor.name} />
  ));

  return (
    <aside
      className={`w-side-nav-w p-4 fixed bg-white dark:bg-gray-dark-bg h-full border-r 
      border-gray-200 dark:border-gray-primary z-10 ${
        isSideShowing ? "left-0" : "-left-60"
      } md:left-0 transition-all`}
      ref={navRef}
    >
      <h2 className="text-lg border-b border-gray-200 dark:border-gray-primary text-center py-2">
        Content
      </h2>
      <ul>{AnchorsComponent}</ul>
      <div className="flex justify-center mt-4 sm:hidden">
        <DarkToggle />
      </div>
    </aside>
  );
}
