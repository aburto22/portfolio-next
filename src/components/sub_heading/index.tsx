import React from 'react';
import styles from './styles.module.scss';

interface SubHeadingProps {
  children: React.ReactNode;
}

const SubHeading = ({ children }: SubHeadingProps) => (
  <h2 className={styles.subHeading}>{children}</h2>
);

export default SubHeading;