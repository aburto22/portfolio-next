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
      src={icon.icon.src}
      alt={icon.alt}
      height={icon.icon.height || 72}
      width={icon.icon.width || 72}
    />
  </styles.TechIcon>
);

export default TechIcon;
