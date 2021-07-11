import React from "react";
import styles from "./styles.module.scss";

type Props = {};

const SearchButton: React.FC<Props> = (props: Props) => {
  return (
    <button className={styles.SearchButton} style={{ padding: "0.5rem 1rem" }}>
      検索
      <i className="fas fa-search" style={{ marginLeft: "0.5rem" }}></i>
    </button>
  );
};

export default SearchButton;
