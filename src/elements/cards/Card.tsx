import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const Card: React.FC<Props> = (props: Props) => {
  return <div className={styles.Card}>{props.children}</div>;
};

export default Card;
