import React from "react";
import Link from 'next/link';
import styles from "@/styles/Index.module.css";

function Header() {
  return (
    <header >
      <nav className={styles.nav}>
        <h1>
        <Link className={styles.anchor} href='/'>SHARERIZ</Link>
        </h1>
      </nav>
    </header>
  );
}

export default Header;
