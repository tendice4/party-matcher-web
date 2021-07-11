import React from "react";
import MemberInputArea from "../constructions/members/MemberInputArea";
import AddMemberButton from "../elements/buttons/AddMemberButton";
import SearchButton from "../elements/buttons/SearchButton";
import Card from "../elements/cards/Card";
import NeumorphHeading from "../elements/headings/NeumorphHeading";
import Text from "../elements/texts/Text";
import styles from "../styles/Entrance.module.scss";

const Entrance: React.FC<{}> = () => {
  return (
    <div className={styles.Entrance}>
      <Card>
        <NeumorphHeading level={1}>PT.Matcher</NeumorphHeading>
        <NeumorphHeading level={3}>- Pokemon UNITE -</NeumorphHeading>
        <hr></hr>
        <Text rem={0.9}>現在のパーティーメンバーを入力 ▼</Text>
        {[1, 2].map((hash) => (
          <MemberInputArea key={hash} hash={hash} />
        ))}
        <AddMemberButton>+</AddMemberButton>
        <hr></hr>
        <SearchButton />
      </Card>
    </div>
  );
};

export default Entrance;
