import React from "react";
import MemberNameInput from "../../elements/forms/input/MemberNameInput";
import Pillar from "../../elements/pillars/Pillar";
import MemberHash from "./MemberHash";

type Props = {
  hash: number;
};

const MemberInputArea: React.FC<Props> = (props: Props) => {
  const { hash } = props;
  return (
    <Pillar>
      <MemberHash hash={hash} />
      <MemberNameInput type="text" />
    </Pillar>
  );
};

export default MemberInputArea;
