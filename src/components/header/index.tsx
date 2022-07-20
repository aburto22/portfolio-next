import { useState } from 'react';
import Svg from '@components/svg';
import ScrollLink from '@components/header/scroll_link';
import DarkToggle from '@components/dark_toggle';
import * as styles from './styles';

const Header = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const handleToggle = () => setIsNavShowing((state) => !state);

  const handleHome = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <styles.Header>
      <styles.Nav>
        <styles.LogoButton
          type="button"
          onClick={handleHome}
        >
          Alejandro Aburto S.
        </styles.LogoButton>
        <styles.NavLinksContainer isShowing={isNavShowing}>
          <styles.CloseButtonItem>
            <styles.CloseButton
              type="button"
              onClick={handleToggle}
              aria-label="close menu"
            >
              <Svg name="close" />
            </styles.CloseButton>
          </styles.CloseButtonItem>
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
          <styles.DarkToggleItem>
            <DarkToggle />
          </styles.DarkToggleItem>
        </styles.NavLinksContainer>
        <styles.OpenButton
          type="button"
          onClick={handleToggle}
          aria-label="open menu"
        >
          <Svg name="menu" />
        </styles.OpenButton>
      </styles.Nav>
    </styles.Header>
  );
};

export default Header;
