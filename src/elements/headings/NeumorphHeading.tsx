import React from "react";
import styles from "./styles.module.scss";

type Props = {
  children: string;
  level: 1 | 2 | 3;
};

const NeumorphHeading: React.FC<Props> = (props: Props) => {
  const { level, children } = props;
  switch (level) {
    default:
    case 1:
      return <h1 className={styles.Neumorph}>{children}</h1>;
    case 2:
      return <h2 className={styles.Neumorph}>{children}</h2>;
    case 3:
      return <h3 className={styles.Neumorph}>{children}</h3>;
  }
};

export default NeumorphHeading;
