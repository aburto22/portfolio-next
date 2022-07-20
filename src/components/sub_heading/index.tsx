import React from 'react';
import * as styles from './styles';

interface SubHeadingProps {
  children: React.ReactNode;
}

const SubHeading = ({ children }: SubHeadingProps) => (
  <styles.SubHeading>{children}</styles.SubHeading>
);

export default SubHeading;
