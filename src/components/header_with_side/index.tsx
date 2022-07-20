import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import ROUTES from '@data/routes.json';
import DarkToggle from '@components/dark_toggle';
import SideNav from '@components/header_with_side/side_nav';
import Svg from '@components/svg';
import { IAnchor } from '@types';
import * as styles from './styles';

interface HeaderSimpleProps {
  anchors?: IAnchor[]
}

const HeaderWithSide = ({ anchors = [] }: HeaderSimpleProps) => {
  const [isSideShowing, setIsSideShowing] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const closeMenu = (event: MouseEvent) => {
      if (!isSideShowing) {
        return;
      }

      const element = event.target as HTMLElement;

      if (element.tagName === 'A') {
        setIsSideShowing(false);
        return;
      }

      if (element === headerRef.current || headerRef.current?.contains(element)) {
        return;
      }

      setIsSideShowing(false);
    };

    window.addEventListener('click', closeMenu);

    return () => window.removeEventListener('click', closeMenu);
  }, [isSideShowing]);

  const handleToggle = () => {
    setIsSideShowing((currentState) => !currentState);
  };

  const hasAnchors = anchors.length > 0;

  return (
    <styles.Header ref={headerRef}>
      <styles.Nav>
        <Link href={ROUTES.home} passHref>
          <styles.LogoLink href="dummy">
            Alejandro Aburto S.
          </styles.LogoLink>
        </Link>
        <styles.DarkToggleContainer isShowing={!hasAnchors}>
          <DarkToggle />
        </styles.DarkToggleContainer>
        {hasAnchors && (
          <styles.Button
            type="button"
            onClick={handleToggle}
            aria-label="toggle menu"
          >
            {isSideShowing ? (
              <Svg name="close" />
            ) : (
              <Svg name="menu" />
            )}
          </styles.Button>
        )}
      </styles.Nav>
      {hasAnchors && (
      <SideNav
        anchors={anchors}
        isSideShowing={isSideShowing}
      />
      )}
    </styles.Header>
  );
};

export default HeaderWithSide;

HeaderWithSide.defaultProps = {
  anchors: [],
};
