import Image from 'next/image';
import ICONS from '@data/icons.json';
import * as styles from './styles';

interface IconsFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  icons: string[];
}

const IconsFilter = ({ filter, setFilter, icons }: IconsFilterProps) => {
  const handleClick = (iconName: string) => {
    if (filter === iconName) {
      setFilter('');
    } else {
      setFilter(iconName);
    }
  };

  const FilterComponents = ICONS
    .filter((icon) => icons.includes(icon.icon))
    .map((icon) => (
      <li key={icon.name}>
        <styles.FilterButton
          type="button"
          onClick={() => handleClick(icon.icon)}
          isSelected={filter === icon.icon}
        >
          <Image
            src={`/icons/${icon.icon}.png`}
            alt={icon.alt}
            width={40}
            height={40}
          />
          <p>{icon.name}</p>
        </styles.FilterButton>
      </li>
    ));

  return (
    <styles.FilterList>
      {FilterComponents}
    </styles.FilterList>
  );
};

export default IconsFilter;
