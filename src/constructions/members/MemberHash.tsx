import React from "react";
import styles from "./styles.module.scss";

type Props = {
  hash: number;
};

const MemberHash: React.FC<Props> = (props: Props) => {
  const { hash } = props;
  return <span className={styles.MemberHash}>{hash}</span>;
};

export default MemberHash;
