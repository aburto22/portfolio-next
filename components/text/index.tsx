import React from "react";
import PropTypes from "prop-types";
import styles from './styles.module.scss';

interface TextProps {
  children: React.ReactNode;
}

const Text = ({ children }: TextProps) => {
  return <p className={styles.text}>{children}</p>;
}

export default Text;

Text.defaultProps = {
  children: null,
};
