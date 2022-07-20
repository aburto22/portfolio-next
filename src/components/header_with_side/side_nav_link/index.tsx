import React, { useState, useEffect } from 'react';
import * as styles from './styles';

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
  };

  return (
    <styles.LinkItem>
      <styles.Link
        href={target}
        onClick={handleClick}
      >
        {name}
      </styles.Link>
    </styles.LinkItem>
  );
};

export default SideNavLink;
