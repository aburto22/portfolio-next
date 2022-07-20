import React from 'react';
import * as styles from './styles';

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => <styles.Text>{children}</styles.Text>;

export default Text;
