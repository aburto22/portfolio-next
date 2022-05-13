import React, { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../context/theme_context';
import { IIcon } from '../../types';
import styles from './styles.module.scss';

interface TechIconProps {
  icon: IIcon;
  tooltip: boolean;
}

const TechIcon = ({ icon, tooltip = false }: TechIconProps) => {
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
        height={72}
        width={72}
      />
    </div>
  );
};

export default TechIcon;
