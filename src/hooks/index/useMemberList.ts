import { Dispatch, SetStateAction, useState } from "react";
import MemberListItem from "../../def/types/member/MemberListItem";
import generateUnique from "../../utils/generateUnique";

const useMemberList = () => {
  const [memberList, setMemberList]: [
    MemberListItem[],
    Dispatch<SetStateAction<MemberListItem[]>>
  ] = useState([{ id: generateUnique(), name: "" }]);
  const addMember = () => {
    setMemberList((memberList) => [
      ...memberList,
      { id: generateUnique(), name: "" },
    ]);
  };
  const deleteMember = (id: string) => {
    setMemberList((memberList) =>
      memberList.filter((member) => member.id !== id)
    );
  };
  const renameMember = (id: string, name: string) => {
    setMemberList((memberList) =>
      memberList.map((member) =>
        member.id === id ? { ...member, name: name } : member
      )
    );
  };
  return { memberList, addMember, deleteMember, renameMember };
};

export default useMemberList;
