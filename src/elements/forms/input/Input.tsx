import React from "react";

type Props = {
  type: "text";
};

const Input: React.FC<Props> = (props: Props) => {
  const { type } = props;
  return <input type={type} />;
};

export default Input;
