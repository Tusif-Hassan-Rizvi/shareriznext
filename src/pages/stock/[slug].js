import React from 'react'
import { useRouter } from 'next/router'
import Header from "components/Header";
import Stocktable from 'components/Stocktable';


function Slug() {
    const router=useRouter();
    const {slug}=router.query;
    const StockData=JSON.parse(sessionStorage.getItem('item'));
  return (
    <>
    <Header></Header>
    <div style={{marginTop:"10vh"}}>
    <Stocktable item={StockData}></Stocktable>
    </div>
    </>
  )
}

export default Slug