import React from "react";
import styles from "./styles.module.scss";
import Input from "./Input";

type Props = {
  type: "text";
};

const MemberNameInput: React.FC<Props> = (props: Props) => {
  const { type } = props;
  return (
    <div className={styles.MemberNameInput}>
      <Input type={type} />
    </div>
  );
};

export default MemberNameInput;
