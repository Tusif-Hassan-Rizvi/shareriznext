import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Index.module.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Search from "components/Search";
import Mainbox from "components/Mainbox";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const [searchvalue, setSearchvalue] = useState("");
  const [indices, setIndices] = useState("NIFTY 50");
  const [stockdata, setStockdata] = useState(props.mydata);
  const [loading, setLoading]=useState(false)
  // lifting state up for search value
  const SearchValue = (data) => {
    setSearchvalue(data);
  };

  // lifting state up for indices
  const GetIndices = (data) => {
    setIndices(data);
  };

  // fetching data from api
  useEffect(() => {
    setLoading(true)
    fetch(process.env.NEXT_PUBLIC_ALLSTOCK + indices)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false)
        setStockdata(response)
      });
  }, [indices]);
  return (
    <>
      <Head>
        <title>Shareriz-Online share market tracker</title>
        <meta
          name="keyword"
          content="Stock market updates, Live stock prices, Indian stock exchange, Stock analysis, Investment tracker, Stock portfolio, NIFTY 50, NIFTY"
        />
        <meta
          name="description"
          content="Experience seamless stock market tracking with Shareriz, the user-friendly online platform that provides real-time data and analysis of Nifty stocks. Make informed investment decisions with shareriz comprehensive and easy-to-use interface."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Search SearchValue={SearchValue}></Search>
      <Mainbox Indices={GetIndices} stockdata={stockdata} loading={loading} searchvalue={searchvalue}></Mainbox>
      <Footer></Footer>
    </>
  );
}

export async function getServerSideProps() {
const indices = 'NIFTY 50';
const link = `http://localhost:3000/api/data?indices=${indices}`;
let data = await fetch(link);
let mydata = await data.json();
return {
  props: { mydata },
};
}
