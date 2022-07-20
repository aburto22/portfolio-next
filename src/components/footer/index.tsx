import Svg from '@components/svg';
import { AsidePlaceholder } from '@styles/utils';
import Form from '@components/footer/form';
import * as styles from './styles';

interface FooterProps {
  sidebar: boolean;
}

const Footer = ({ sidebar = false }: FooterProps) => (
  <>
    {sidebar && <AsidePlaceholder />}
    <styles.Footer>
      <styles.FooterContainer>
        <Form />
        <styles.FooterLegend>
          <styles.FooterIconsContainer>
            <styles.FooterIconLarge
              href="mailto:aburto22@gmail.com"
              aria-label="Send me an email"
            >
              <Svg name="mail" />
            </styles.FooterIconLarge>
            <styles.FooterIcon
              href="https://github.com/aburto22"
              aria-label="My git-hub page"
              target="_blank"
              rel="noreferrer"
            >
              <Svg name="github" />
            </styles.FooterIcon>
            <styles.FooterIconLarge
              href="https://linkedin.com/in/alejandroaburtos/"
              aria-label="My linkedin page"
              target="_blank"
              rel="noreferrer"
            >
              <Svg name="linkedin" />
            </styles.FooterIconLarge>
            <styles.FooterIconLarge
              href="https://www.freecodecamp.org/aburto22"
              aria-label="My freeCodeCamp page"
              target="_blank"
              rel="noreferrer"
            >
              <Svg name="freeCodeCamp" />
            </styles.FooterIconLarge>
          </styles.FooterIconsContainer>
          <styles.FooterText>Created by Alejandro Aburto S.</styles.FooterText>
        </styles.FooterLegend>
      </styles.FooterContainer>
    </styles.Footer>
  </>
);

export default Footer;
