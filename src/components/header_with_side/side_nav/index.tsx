import SideNavLink from '@components/header_with_side/side_nav_link';
import DarkToggle from '@components/dark_toggle';
import { IAnchor } from '@types';
import * as styles from './styles';

interface SideNavProps {
  anchors: IAnchor[];
  isSideShowing: boolean;
}

const SideNav = ({ anchors, isSideShowing }: SideNavProps) => {
  const AnchorsComponent = anchors.map((anchor) => (
    <SideNavLink name={anchor.name} target={anchor.target} key={anchor.name} />
  ));

  return (
    <styles.SideMenu isShowing={isSideShowing}>
      <styles.Title>
        Content
      </styles.Title>
      <ul>{AnchorsComponent}</ul>
      <styles.DarkToggleContainer>
        <DarkToggle />
      </styles.DarkToggleContainer>
    </styles.SideMenu>
  );
};

export default SideNav;
