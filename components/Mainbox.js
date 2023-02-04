import React, { useState, useEffect } from "react";
import styles from "@/styles/Index.module.css";
import Loadder from "./Loadder";
import Customselect from "./Customselect";
import Image from "next/image";
import Link from "next/link";
import Stocktable from "./Stocktable";

export default function Mainbox(props) {
  const [indices, setIndices] = useState("");
  const [listinput, setListinput] = useState("");
  const IndexArray = [
    "NIFTY 50",
    "NIFTY IT",
    "NIFTY BANK",
    "NIFTY ENERGY",
    "NIFTY PHARMA",
    "NIFTY INFRA",
    "NIFTY METAL",
    "NIFTY AUTO",
    "NIFTY PSU BANK",
    "NIFTY PVT BANK",
    "NIFTY FIN SERVICE",
    "NIFTY MEDIA",
  ];

  const OnclickIndices = (e) => {
    setIndices(e.target.innerText);

    // sending stock list data to index js using state lifting
    props.Indices(e.target.innerText);
  };

  // implementing search prefrence
  useEffect(() => {
    let showinfo = document.getElementById("ShowInfo");
    let ParaDisplay = document.getElementById("para");
    let value = listinput;
    value = value.toUpperCase();
    let noResults = true;
    for (let i = 0; i < showinfo.children[0].children.length; i++) {
      let child = showinfo.children[0].children[i];

      if (child.innerText.includes(value)) {
        noResults = false;
        child.style.display = "flex";
      } else {
        child.style.display = "none";
      }
    }
    noResults
      ? (ParaDisplay.style.display = "block")
      : (ParaDisplay.style.display = "none");
    ParaDisplay.innerHTML = noResults ? `"${listinput}" Not found!` : "";
    if (noResults) {
      showinfo.style.display = "none";
    } else {
      showinfo.style.display = "flex";
    }
  }, [listinput]);

  useEffect(() => {
    let paraDisplay = document.getElementById("para");
    paraDisplay.style.display = "none";
  }, [indices]);

  // listinput HandleChange
  const HandleChange = (e) => {
    setListinput(e.target.value);
  };

  //select indices logic
  const handleSelectChange = (value) => {
    setIndices(value);
    props.Indices(value);
  };

  return (
    <>
      <div id="container" className={styles.container}>
          {/* index list & search option*/}
        <div id="menue" className={styles.menue}>
          <Customselect options={IndexArray} onChange={handleSelectChange} />
          <div className={styles.indexInputbox}>
            <span className={styles.indexsearchIcon}>
              <Image
                src="/search.svg"
                height={10}
                width={15}
                className={styles.searchIcon}
                alt="search"
              ></Image>
            </span>
            <input
              className={styles.indexInput}
              type="search"
              placeholder="Search stocks"
              onChange={HandleChange}
              value={listinput}
            ></input>
          </div>
        </div>

        {/* stocks data  */}
        <p id="para" className={styles.para}></p>
        <div
          id="ShowInfo"
          style={props.loading ? { boxShadow: "none" } : {}}
          className={styles.showdataBox}
        >
          {props.loading ? (
            <Loadder />
          ) : (
            <div>
              {props.stockdata.length === 0 ? (
                <h2>Data not found!</h2>
              ) : (
                props.stockdata.map((item, index) => (
                  <div key={index}>
                    <Link
                      href={`/stock/${item.symbol}`}
                      onClick={() =>
                        sessionStorage.setItem("item", JSON.stringify(item))
                      }
                    >
                      <Stocktable item={item}></Stocktable>
                    </Link>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
