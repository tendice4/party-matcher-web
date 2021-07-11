import React from "react";
import MemberListItem from "../../def/types/member/MemberListItem";
import DeleteMemberButton from "../../elements/buttons/DeleteMemberButton";
import MemberNameInput from "../../elements/forms/input/MemberNameInput";
import Pillar from "../../elements/pillars/Pillar";
import MemberHash from "./MemberHash";

type Props = {
  hash: number;
  member: MemberListItem;
  renameMember: (key: string, name: string) => void;
  deleteMember: (key: string) => void;
};

const MemberInputArea: React.FC<Props> = (props: Props) => {
  const { hash, member, renameMember, deleteMember } = props;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const changedText = e.target.value;
    renameMember(member.id, changedText);
  };
  const onClickDelete = () => {
    deleteMember(member.id);
  };
  return (
    <Pillar>
      <MemberHash hash={hash} />
      <MemberNameInput type="text" name={member.name} onChange={onChange} />
      <DeleteMemberButton onClick={onClickDelete} />
    </Pillar>
  );
};

export default MemberInputArea;
