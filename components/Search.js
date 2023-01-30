import React, { useState } from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";

function Search(props) {
  const [input, setInput] = useState("");
  const HandleChange = (e) => {
    props.SearchValue(e.target.value)
    setInput(e.target.value);
  };
  return (
    <>
      <div className={styles.searchOption}>
      <span className={styles.searchbtn}><Image src='/search.svg' height={20} width={20} className={styles.searchIcon} alt="search"></Image></span>
        <input
          className={styles.inputBox}
          type="search"
          placeholder="Search stocks here"
          id="search-input"
          onChange={HandleChange}
          value={input}
        />
      
      
      </div>
    </>
  );
}

export default Search;
