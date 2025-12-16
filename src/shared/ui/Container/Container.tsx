import React from "react";
import styles from "./styles/Container.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className = "" }: Props) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
