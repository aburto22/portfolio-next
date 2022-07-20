import Image from 'next/image';
import { IIcon } from '@types';
import * as styles from './styles';

interface TechIconProps {
  icon: IIcon;
  tooltip: boolean;
}

const TechIcon = ({ icon, tooltip = false }: TechIconProps) => (
  <styles.TechIcon>
    {tooltip && (
      <styles.Tooltip>
        {icon.name}
      </styles.Tooltip>
    )}
    <Image
      src={`/icons/${icon.icon}.png`}
      alt={icon.alt}
      height={72}
      width={72}
    />
  </styles.TechIcon>
);

export default TechIcon;
