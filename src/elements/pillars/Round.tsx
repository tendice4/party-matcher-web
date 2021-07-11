import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  radius: number;
  mini?: boolean;
};

const Round: React.FC<Props> = (props: Props) => {
  const { children, radius, mini = false } = props;
  const remSize = `${radius}rem`;
  return (
    <div
      className={mini ? styles.RoundMini : styles.Round}
      style={{ width: remSize, height: remSize }}
    >
      {children}
    </div>
  );
};

export default Round;
