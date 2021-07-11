import React from "react";

type Props = {
  type: "text";
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const Input: React.FC<Props> = (props: Props) => {
  const { type, value, onChange } = props;
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
