import CustomSelect from "components/Customselect";
import React, { useState, useEffect } from "react";

function Serverside(props) {
  const [data, setdata] = useState(props.mydata);
  const [indices, setIndices]=useState("NIFTY 50")

  
  const handleSelectChange = (value) => {
    setIndices(value);
  }
  console.log(indices)
  console.log(process.env.NEXT_PUBLIC_ALLSTOCK)
  return (
    <>
  <CustomSelect  options={['NIFTY 50', 'NIFTY IT', 'NIFTY BANK', 'NIFTY ENERGY']} onChange={handleSelectChange}></CustomSelect>
      {data.map((val, index) => {
        return (
          
          <div key={index} className="show-data">
              <div className="important-info">
                <span className="symbol">
                  <div className="info-text">COMPANY NAME</div>
                  {val.symbol}
                </span>
                <span className="open">
                  <div className="info-text">OPEN</div>
                  {val.open}
                </span>
                <span className="dayHigh">
                  <div className="info-text">DAY HIGH</div>
                  {val.dayHigh}
                </span>
                <span className="dayLow">
                  <div className="info-text">DAY LOW</div>
                  {val.dayLow}
                </span>
                <span className="lastPrice">
                  <div className="info-text">LAST PRICE</div>
                  {val.lastPrice}
                </span>
                <span className="change">
                  <div className="info-text">PRICE CHANGE</div>
                  <span id="pricechange">{val.change.toFixed(2)}</span>
                </span>
                <span className="pChange">
                  <div className="info-text">PROFIT/LOSS</div>
                  {val.pChange.toFixed(2)}%
                </span>
              </div>
            </div>
         
         );
        })}
        </>

  );
}

export async function getServerSideProps(context) {
    console.log("this is context ", context.query)
  const indices = 'NIFTY 50';
  const link = `http://localhost:3000/api/data?indices=${indices}`;
  let data = await fetch(link);
  let mydata = await data.json();
  return {
    props: { mydata },
  };
}

export default Serverside;
