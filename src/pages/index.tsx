import { useRouter } from "next/dist/client/router";
import React from "react";
import MemberInputArea from "../constructions/members/MemberInputArea";
import AddMemberButton from "../elements/buttons/AddMemberButton";
import SearchButton from "../elements/buttons/SearchButton";
import Card from "../elements/cards/Card";
import NeumorphHeading from "../elements/headings/NeumorphHeading";
import Text from "../elements/texts/Text";
import styles from "../styles/Entrance.module.scss";
import useMemberList from "../hooks/index/useMemberList";

const Entrance: React.FC<{}> = () => {
  const router = useRouter();
  const { memberList, addMember, deleteMember, renameMember } = useMemberList();
  const onClickSearch = async () => {
    const res = await fetch(`http://localhost:3000/api/createTeamURL`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberList),
    });
    const url = (await res.json()).url;
    router.push(`board?${url}`, `board/${url}`, {});
  };
  return (
    <div className={styles.Entrance}>
      <Card>
        <NeumorphHeading level={1}>PT.Matcher</NeumorphHeading>
        <NeumorphHeading level={3}>- Pokemon UNITE -</NeumorphHeading>
        <hr></hr>
        <Text rem={0.9}>現在のパーティーメンバーを入力 ▼</Text>
        <div className={styles.MemberInputWrapper}>
          {memberList.map((member, index) => (
            <MemberInputArea
              key={member.id}
              hash={index + 1}
              member={member}
              renameMember={renameMember}
              deleteMember={deleteMember}
            />
          ))}
          {memberList.length < 5 && (
            <AddMemberButton onClick={addMember}>+</AddMemberButton>
          )}
        </div>
        <hr></hr>
        <SearchButton onClick={onClickSearch} />
      </Card>
    </div>
  );
};

export default Entrance;
