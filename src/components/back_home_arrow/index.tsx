import Link from 'next/link';
import Svg from '@components/svg';
import ROUTES from '@data/routes.json';
import * as styles from './styles';

const BackHomeArrow = () => (
  <styles.Container>
    <Link href={ROUTES.home} passHref>
      <styles.Link href="dummy">
        <styles.SvgIcon>
          <Svg name="arrowLeft" />
        </styles.SvgIcon>
        Go back to main page
      </styles.Link>
    </Link>
    <styles.Line />
  </styles.Container>
);

export default BackHomeArrow;
