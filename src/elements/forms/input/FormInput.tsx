import React from "react";
import Input from "./Input";

type Props = {
  type: "text";
  label: string;
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

const FormInput: React.FC<Props> = (props: Props) => {
  const { type, label, value, onChange } = props;
  return (
    <label>
      {label}
      <Input type={type} value={value} onChange={onChange} />
    </label>
  );
};

export default FormInput;
