import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const Button: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <button className={styles.Button}>{children}</button>;
};

export default Button;
