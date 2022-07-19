import React from 'react';
import styles from './styles.module.scss';

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => <p className={styles.text}>{children}</p>;

export default Text;
