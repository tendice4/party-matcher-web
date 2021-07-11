import React from "react";
import Input from "./Input";

type Props = {
  type: "text";
  label: string;
};

const FormInput: React.FC<Props> = (props: Props) => {
  const { type, label } = props;
  return (
    <label>
      {label}
      <Input type={type} />
    </label>
  );
};

export default FormInput;
