import useElementOnScreen from '@hooks/use_element_on_screen';
import ScrollButton from '@components/welcome/scroll_button';
import * as styles from './styles';

const Welcome = () => {
  const [ref, isShowing] = useElementOnScreen<HTMLDivElement>();

  return (
    <styles.Section>
      <styles.Anchor id="home" />
      <styles.Container ref={ref}>
        <styles.Title isShowing={isShowing}>
          Hi, I am Alejandro
          {' '}
          <styles.TitleHand>👋</styles.TitleHand>
          ,
        </styles.Title>
        <styles.SubTitle isShowing={isShowing}>
          Full-Stack JavaScript developer
        </styles.SubTitle>
        <styles.Text isShowing={isShowing}>
          My aim is to build simple and elegant apps with no distractions, so
          users focus on what it is most relevant.
        </styles.Text>
        <styles.ButtonContainer>
          <ScrollButton target="projects" isShowing={isShowing}>
            View my projects
          </ScrollButton>
          <styles.LinkButtonSecondary
            href="mailto:aburto22@gmail.com"
            isShowing={isShowing}
          >
            Email me
          </styles.LinkButtonSecondary>
        </styles.ButtonContainer>
      </styles.Container>
    </styles.Section>
  );
};

export default Welcome;
