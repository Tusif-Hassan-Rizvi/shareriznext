import React from "react";
import { useRouter } from "next/router";
import Header from "components/Header";
import Stocktable from "components/Stocktable";
import styles from "@/styles/Index.module.css";
import stylesbutton from "@/styles/about.module.css";
import Grid from "components/Grid";


function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  let StockData = JSON.parse(sessionStorage.getItem("item"));

  return (
    <>
      <button type="button" onClick={() => router.back()} className={stylesbutton.buttonStyle} style={{marginLeft:"10px"}}>
      Go Back
      </button>
      <div style={{ marginTop: "10vh", display:"flex", alignItems:"center", justifyContent:"center" }}>
      <Grid StockData={StockData}></Grid>
      </div>
    </>
  );
}

export default Slug;
