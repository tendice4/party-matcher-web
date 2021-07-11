import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const AddMemberButton: React.FC<Props> = (props: Props) => {
  return (
    <button className={styles.AddMemberButton}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddMemberButton;
