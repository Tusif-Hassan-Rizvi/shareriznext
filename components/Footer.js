import React from "react";
import styles from "@/styles/Index.module.css";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <>
     {/* <Link href="#ShowInfo" className={styles.backTop}><Image src="/uparrow.png" alt="arrow" width={20} height={20}/></Link> */}
    <footer id="footer" className={styles.footer}>
      Copyright <span className={styles.icon}> &#169; </span> 2023 shareriz.com
    </footer>
    </>
  );
}

export default Footer;
