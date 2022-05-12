import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';

interface TextProps {
  children: React.ReactNode;
}

export default function Text({ children }: TextProps) {
  return <p className={styles.text}>{children}</p>;
}

Text.defaultProps = {
  children: null,
};
