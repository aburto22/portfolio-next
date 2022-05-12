import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

interface SideNavLinkProps {
  name: string;
  target: string;
}

const SideNavLink = ({ name, target }: SideNavLinkProps) => {
  const [anchor, setAnchor] = useState<Element | null>(null);

  useEffect(() => {
    setAnchor(document.querySelector(target));
  }, [target]);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();

    if (!anchor) {
      return;
    }

    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <li className="flex border-b border-gray-200 dark:border-gray-primary">
      <a
        href={target}
        className="py-2 hover:text-blue-hover pl-2 w-full text-sm"
        onClick={handleClick}
      >
        {name}
      </a>
    </li>
  );
}

export default SideNavLink;
