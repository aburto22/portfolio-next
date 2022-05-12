
import React, { useContext } from 'react';
import ThemeContext from '../../context/theme_context';
import { IIcon } from '../../types'; 
import Image from 'next/image';
import styles from './styles.module.scss';

interface TechIconProps {
  icon: IIcon;
  className: string;
  tooltip: boolean;
}

const TechIcon = ({ icon, className, tooltip }: TechIconProps) => {
  const [darkTheme] = useContext(ThemeContext);
  return (
    <div className={`${styles.techIcon} ${darkTheme && styles.techIconDark}`}>
      {tooltip && (
        <div className={`${styles.tooltip} ${darkTheme && styles.tooltipDark}`}>
          {icon.name}
        </div>
      )}
      <Image
        src={`/icons/${icon.icon}.png`}
        alt={icon.alt}
        className={className}
      />
    </div>
  );
}

export default TechIcon;

TechIcon.defaultProps = {
  className: styles.techIconDefaultSize,
  tooltip: false,
};
