import React from "react";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

const DeleteMemberButton: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button onClick={onClick} className={styles.DeleteMemberButton}>
      <i className="fas fa-trash" style={{ color: "hsl(332,100%,40%)" }}></i>
    </button>
  );
};

export default DeleteMemberButton;
