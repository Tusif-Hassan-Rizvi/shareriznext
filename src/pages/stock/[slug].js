import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import stylesbutton from "@/styles/about.module.css";
import Grid from "components/Grid";
import Link from "next/link";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Slug() {
  const router = useRouter();
  const { slug } = router.query;
  const StockData = typeof window !== "undefined" && window.sessionStorage
    ? JSON.parse(window.sessionStorage.getItem("item"))
    : null;
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (StockData !== value) {
      setValue(StockData);
    }
  }, []);


  async function generatePDF(stock) {
    const input = document.getElementById('pdf-content');
    const canvas = await html2canvas(input);
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 10, pdf.internal.pageSize.width, canvas.height * pdf.internal.pageSize.width / canvas.width);
    pdf.save(`${stock}.pdf`);
  }
 
  return (
    <>
      <button
        type="button"
        onClick={() => router.back()}
        className={stylesbutton.buttonStyle}
        style={{ marginLeft: "10px" }}
      >
        Go Back
      </button>
      <button
        type="button"
        onClick={()=>generatePDF(value.symbol)}
        className={stylesbutton.buttonStyle}
        style={{ marginLeft: "10px" }}
      >
        Download PDF
      </button>
      {value !== null ? (
        <>
        <div id="pdf-content">
        <div style={{ textAlign: "center", marginTop: "10px" }}  >
          <h2 >
            {value.symbol}
          </h2>
          Last Update {value.lastUpdateTime}
        </div>
          <div
            style={{
              marginTop: "10vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Grid StockData={value}></Grid>
          </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Slug;
