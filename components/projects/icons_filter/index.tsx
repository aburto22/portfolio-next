import React, { useContext } from 'react';
import Image from 'next/image';
import ThemeContext from '../../../context/theme_context';
import ICONS from '../../../data/icons.json';
import styles from './styles.module.scss';

interface IconsFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const IconsFilter = ({ filter, setFilter }: IconsFilterProps) => {
  const [darkTheme] = useContext(ThemeContext);

  const handleClick = (iconName: string) => {
    if (filter === iconName) {
      setFilter('');
    } else {
      setFilter(iconName);
    }
  };

  const FilterComponents = ICONS
    .filter((icon) => icon.filter)
    .map((icon) => (
      <li key={icon.name}>
        <button
          type="button"
          onClick={() => handleClick(icon.icon)}
          className={`${styles.filterButton} ${darkTheme && styles.filterButtonDark} ${filter === icon.icon && styles.filterButtonSelected}`}
        >
          <Image
            src={`/icons/${icon.icon}.png`}
            alt={icon.alt}
            width={40}
            height={40}
          />
          <p className={styles.iconName}>{icon.name}</p>
        </button>
      </li>
    ));

  return (
    <ul className={styles.filterList}>
      {FilterComponents}
    </ul>
  );
};

export default IconsFilter;
