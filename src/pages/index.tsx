import React from "react";
import Card from "../elements/cards/Card";
import Heading from "../elements/headings/Heading";
import styles from "../styles/Entrance.module.scss";

const Entrance: React.FC<{}> = () => {
  return (
    <div className={styles.Entrance}>
      <Card>
        <Heading level={1}>Entrance</Heading>
        Card test
      </Card>
    </div>
  );
};

export default Entrance;
