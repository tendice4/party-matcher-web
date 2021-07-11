import React from "react";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

const AddMemberButton: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button className={styles.AddMemberButton} onClick={onClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default AddMemberButton;
