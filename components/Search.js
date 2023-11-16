import React, { useState, useEffect } from 'react';
import styles from '@/styles/Index.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Stocktable from './Stocktable';
import axios from 'axios';

export default function Search(props) {
  const [input, setInput] = useState('');
  const [searchdata, setSearchdata] = useState(props.ALLDATA);

  function HandleonClick(item) {
    props.FullDetails(!props.stockfulldata);
    sessionStorage.setItem('item', JSON.stringify(item));
  }

  const HandleChange = (e) => {
    props.SearchValue(e.target.value);
    setInput(e.target.value);
  };

  const headers = {
    'X-RapidAPI-Key': 'baed0f0ab7msh233268c70b5b296p1281c7jsncb4e068d88ab',
    'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
  };
  async function calldata() {
    const secondApiResponse = await axios.get(
     'https://latest-stock-price.p.rapidapi.com/any',
      { headers }
    );
    const AllData = secondApiResponse.data;
    setSearchdata(AllData);
  }

  useEffect(() => {
    calldata();
    let SearchAll = document.getElementById('searchData');
    // search all logic
    if (SearchAll.children[0]) {
      SearchAll.children[0].style.display = 'flex';
    }
  }, [input]);
  return (
    <>
      <section id="Track" style={{ minHeight: '50vh' }}>
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
          {searchdata.message
            ? null
            : searchdata.map(
                (item, index) =>
                  input !== '' &&
                  (item.symbol.includes(input.toUpperCase()) ? (
                    <div
                      style={{ display: 'none' }}
                      key={index}
                      onClick={() => HandleonClick(item)}
                    >
                      <Stocktable item={item}></Stocktable>
                    </div>
                  ) : null)
              )}
        </div>
      </section>
    </>
  );
}
