import React, { useState, useEffect } from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";
import Link from "next/link";
import Stocktable from "./Stocktable";

export default function Search(props) {
  const [input, setInput] = useState("");
  const HandleChange = (e) => {
    props.SearchValue(e.target.value);
    setInput(e.target.value);
  };

  useEffect(() => {
    let SearchAll = document.getElementById("searchData");
    // search all logic
    if (SearchAll.children[0]) {
      SearchAll.children[0].style.display = "flex";
    }
  }, [input]);
  return (
    <>
      <section id="Track" style={{minHeight:"50vh"}}>
        <div className={styles.searchOption}>
          <div className={styles.searchInputBox}>
            <span className={styles.searchbtn}>
              <Image
                src="/search.svg"
                height={20}
                width={20}
                className={styles.searchIcon}
                alt="search"
              ></Image>
            </span>
            <input
              className={styles.inputBox}
              type="search"
              placeholder="Search stocks"
              id="search-input"
              onChange={HandleChange}
              value={input}
            />
          </div>
        </div>

        {/* search result  */}
        <div id="searchData" className={styles.SearchData}>
          {props.ALLDATA.message
            ? null
            :props.ALLDATA.map(
                (item, index) =>
                  input !== "" &&
                  (item.symbol.includes(input.toUpperCase()) ? (
                    <div key={index} style={{ display: "none"}}>
                      <Link
                      legacyBehavior
                        href={`/stock/${item.symbol}`}
                      >
                        <a style={{textDecoration:"none"}}  onClick={() =>
                          sessionStorage.setItem("item", JSON.stringify(item))
                        }>
                        <Stocktable item={item}></Stocktable>
                        </a>
                      </Link>
                    </div>
                  ) : null)
              )}
        </div>
      </section>
    </>
  );
}
