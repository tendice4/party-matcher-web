import React from "react";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
};

const SearchButton: React.FC<Props> = (props: Props) => {
  const { onClick } = props;
  return (
    <button
      className={styles.SearchButton}
      style={{ padding: "0.5rem 1rem" }}
      onClick={onClick}
    >
      検索
      <i className="fas fa-search" style={{ marginLeft: "0.5rem" }}></i>
    </button>
  );
};

export default SearchButton;
