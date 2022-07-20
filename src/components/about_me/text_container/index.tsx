import SubHeading from '@components/sub_heading';
import * as styles from './styles';

interface TextContainerProps {
  heading?: string;
  anchor?: string;
  children: React.ReactNode;
}

const TextContainer = ({ heading = '', anchor = '', children }: TextContainerProps) => (
  <styles.TextContainer>
    {heading && <SubHeading>{heading}</SubHeading>}
    {anchor && <styles.Anchor id={anchor} />}
    {children}
  </styles.TextContainer>
);

export default TextContainer;

TextContainer.defaultProps = {
  heading: '',
  anchor: '',
};
