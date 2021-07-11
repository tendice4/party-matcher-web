import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: string;
  rem?: number;
};

const Text: React.FC<Props> = (props: Props) => {
  const { children, rem = 1 } = props;
  const remSize = `${rem}rem`;
  return (
    <span className={styles.Text} style={{ fontSize: remSize }}>
      {children}
    </span>
  );
};

export default Text;
