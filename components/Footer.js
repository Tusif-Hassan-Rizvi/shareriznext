import React from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";

function handleClick(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Footer() {
  return (
    <>
     {/* <span onClick={() => handleClick('TopSite')} className={styles.backTop}><Image src="/uparrow.png" alt="arrow" width={30} height={30}/></span> */}
    <footer id="footer" className={styles.footer}>
      Copyright <span className={styles.icon}> &#169; </span> 2023 shareriz.com
    </footer>
    </>
  );
}

export default Footer;
