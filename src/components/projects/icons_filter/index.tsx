import { useIconsContext } from '@context/icons_context';
import Image from 'next/image';
import * as styles from './styles';

interface IconsFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  usedIcons: string[];
}

const IconsFilter = ({ filter, setFilter, usedIcons }: IconsFilterProps) => {
  const icons = useIconsContext();
  const handleClick = (iconName: string) => {
    if (filter === iconName) {
      setFilter('');
    } else {
      setFilter(iconName);
    }
  };

  const FilterComponents = icons
    .filter((icon) => usedIcons.includes(icon.iconName))
    .map((icon) => (
      <li key={icon.name}>
        <styles.FilterButton
          type="button"
          onClick={() => handleClick(icon.iconName)}
          isSelected={filter === icon.iconName}
        >
          <Image
            src={icon.icon.src}
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
