import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import { Inter } from "@next/font/google";
import styles from "@/styles/Index.module.css";
import Header from "components/Header";
import Footer from "components/Footer";
import Search from "components/Search";
import Mainbox from "components/Mainbox";
import About from "components/About";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps() {
  const indices = "NIFTY 50";
  const link1 = `${process.env.NEXT_PUBLIC_INDICES}?indices=${indices}`;
  const link2 = process.env.NEXT_PUBLIC_ALLSTOCK;

  // fetch data from for indices
  const firstApiResponse = await axios.get(link1);
  const IndicesData = firstApiResponse.data;

  // Fetch data for all data
  const secondApiResponse = await axios.get(link2);
  const AllData = secondApiResponse.data;
  // const AllData={message:"not found"}

  return {
    props: {
      IndicesData,
      AllData,
    },
  };
}

export default function Home(props) {
  const [searchvalue, setSearchvalue] = useState("");
  const [indices, setIndices] = useState("NIFTY 50");
  const [stockdata, setStockdata] = useState(props.IndicesData);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_INDICES}?indices=${indices}`)
      .then((response) => response.json())
      .then((response) => {
        setLoading(false);
        setStockdata(response);
      })
      .catch(() => {
        setStockdata({ message: "Data not found!" });
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
      <About></About>
      <Search SearchValue={SearchValue} ALLDATA={props.AllData}></Search>
      <Mainbox
        Indices={GetIndices}
        stockdata={stockdata}
        loading={loading}
        searchvalue={searchvalue}
      ></Mainbox>
      <Footer></Footer>
    </>
  );
}
