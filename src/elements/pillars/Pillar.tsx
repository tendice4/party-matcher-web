import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const Pillar: React.FC<Props> = (props: Props) => {
  const { children } = props;
  return <div className={styles.Pillar}>{children}</div>;
};

export default Pillar;
