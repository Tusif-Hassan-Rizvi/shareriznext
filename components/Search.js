import React, { useState, useEffect } from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Search(props) {
  const [input, setInput] = useState("");
  const [breifdata, setBreifdata] = useState([]);
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
  useEffect(() => {
    fetch("http://localhost:3000/api/alldata")
      .then((response) => response.json())
      .then((response) => {
        setBreifdata(response);
      });
  }, []);
  return (
    <>
      <div className={styles.searchOption}>
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
          placeholder="Search stocks here"
          id="search-input"
          onChange={HandleChange}
          value={input}
        />
      </div>

      {/* search result  */}
      <div id="searchData" className={styles.SearchData}>
        {breifdata.length === 0
          ? null
          : breifdata.map(
              (item, index) =>
                input !== "" &&
                (item.symbol.includes(input.toUpperCase()) ? (
                  <div
                    key={index}
                    className={styles.showdata}
                    style={{ display: "none" }}
                  >
                      <Link href={`/stock/${item.symbol}`}>
                    <div className={styles.stockDetail} style={{color:"rgba(75, 85, 99, 0.952)"}}>{item.symbol}</div>
                    <div className={styles.stockDetail} id="lastPrice">
                      ₹{item.lastPrice}
                    </div>
                    <div className={styles.stockDetail}>
                      <div
                        id="pricechange"
                        style={
                          item.change >= 0
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.change >= 0 ? "+" : ""}
                        {item.change.toFixed(2)} ₹
                      </div>
                    </div>
                    <div className={styles.stockDetail} id="pc">
                      <div
                        style={
                          item.pChange >= 0
                            ? { color: "green" }
                            : { color: "red" }
                        }
                      >
                        {item.pChange >= 0 ? "+" : ""}
                        {item.pChange.toFixed(2)}%
                      </div>
                    </div>
                    </Link>
                  </div>
                ) : null)
            )}
      </div>
    </>
  );
}
