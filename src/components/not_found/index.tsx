import BackHomeArrow from '@components/back_home_arrow';
import * as styles from './styles';

const About = () => (
  <styles.Section>
    <BackHomeArrow />
    <styles.Content>
      <styles.Title>404 - Not Found</styles.Title>
      <styles.Description>
        The page you are trying to access doesn&apos;t exists.
      </styles.Description>
    </styles.Content>
  </styles.Section>
);

export default About;
