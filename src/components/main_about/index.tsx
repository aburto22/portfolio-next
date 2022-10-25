import Link from 'next/link';
import TechIcon from '@components/tech_icon';
import useElementOnScreen from '@hooks/use_element_on_screen';
import ROUTES from '@data/routes.json';
import type { IIcon } from '@types';
import { useIconsContext } from '@context/icons_context';
import * as styles from './styles';

const MainAbout = () => {
  const [refText, isShowingText] = useElementOnScreen<HTMLDivElement>();
  const [refFront, isShowingFront] = useElementOnScreen<HTMLUListElement>();
  const [refBack, isShowingBack] = useElementOnScreen<HTMLUListElement>();
  const [refGeneral, isShowingGeneral] = useElementOnScreen<HTMLUListElement>();
  const icons = useIconsContext();

  const createIcon = (icon: IIcon, i: number) => {
    const transitionDelay = `${i * 100}ms`;

    let isShowing: boolean;
    if (icon.category === 'front-end') {
      isShowing = isShowingFront;
    } else if (icon.category === 'back-end') {
      isShowing = isShowingBack;
    } else {
      isShowing = isShowingGeneral;
    }

    return (
      <styles.IconItem
        isShowing={isShowing}
        key={icon.name}
        style={{ transitionDelay }}
      >
        <TechIcon icon={icon} tooltip />
      </styles.IconItem>
    );
  };

  const IconsFrontEndComponents = icons.filter(
    (icon) => icon.category === 'front-end',
  ).map(createIcon);

  const IconsBackEndComponents = icons.filter(
    (icon) => icon.category === 'back-end',
  ).map(createIcon);

  const IconsGeneralComponents = icons.filter(
    (icon) => icon.category === 'general',
  ).map(createIcon);

  return (
    <styles.Section>
      <styles.Anchor id="about-me" />
      <styles.Container ref={refText}>
        <styles.Title>About Me</styles.Title>
        <styles.Text isShowing={isShowingText}>
          Hi, my name is Alejandro, and I am a Full-Stack JavaScript
          developer. I enjoy working on the back-end as much as on the
          front-end.
        </styles.Text>
        <styles.Text isShowing={isShowingText}>
          I am familiar with the following technologies, and I am always
          looking forward to learn more:
        </styles.Text>
        <styles.SubTitle>Front-end</styles.SubTitle>
        <styles.IconContainer ref={refFront}>
          {IconsFrontEndComponents}
        </styles.IconContainer>
        <styles.SubTitle>Back-end</styles.SubTitle>
        <styles.IconContainer ref={refBack}>
          {IconsBackEndComponents}
        </styles.IconContainer>
        <styles.SubTitle>Other</styles.SubTitle>
        <styles.IconContainer ref={refGeneral}>
          {IconsGeneralComponents}
        </styles.IconContainer>
        <Link href={ROUTES.aboutMe} passHref>
          <styles.Link href="dummy">
            Click here to learn a little bit more about me
          </styles.Link>
        </Link>
      </styles.Container>
    </styles.Section>
  );
};

export default MainAbout;
