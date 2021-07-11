import React from "react";
import styles from "./styles.module.scss";
import Input from "./Input";

type Props = {
  type: "text";
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const MemberNameInput: React.FC<Props> = (props: Props) => {
  const { type, name, onChange } = props;
  return (
    <div className={styles.MemberNameInput}>
      <Input type={type} value={name} onChange={onChange} />
    </div>
  );
};

export default MemberNameInput;
