import React from "react";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import style from "@/styles/Index.module.css";

function Header() {
  function handleClick(e, id) {
    document.getElementById("hamcheck").checked = false;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <header id="TopSite">
      <nav className={style.nav}>
        <h1 className={style.h1}>
          <Link href={"/"} legacyBehavior>
            <a>
            SHARERIZ
            </a>
          </Link>
        </h1>
        <ul className={style.navigate}>
          <li onClick={(e) => handleClick(e, "About")}>
            <a>About</a>
          </li>
          <li onClick={(e) => handleClick(e, "Track")}>
            <a>Track</a>
          </li>
          <li onClick={(e) => handleClick(e, "Index")}>
            <a>Index</a>
          </li>
        </ul>
      </nav>

      {/* responsive navbar  */}
      <nav className={style.hamnav}>
        <div className={styles.navbar}>
          <div className={`${styles.container} ${styles.navcontainer}`}>
            <input
              className={styles.checkbox}
              type="checkbox"
              name=""
              id="hamcheck"
            />
            <div className={styles.hamburgerlines}>
              <span className={`${styles.line} ${styles.line1}`}></span>
              <span className={`${styles.line} ${styles.line2}`}></span>
              <span className={`${styles.line} ${styles.line3}`}></span>
            </div>
            <div className={styles.logo}>
              <h1>
                <Link
                style={{color:"purple", fontWeight:"600"}}
                  href="/"
                >
                  SHARERIZ
                </Link>
              </h1>
            </div>
            <div className={styles.menuitems}>
              <li onClick={(e) => handleClick(e, "About")}>
                <a>About</a>
              </li>
              <li onClick={(e) => handleClick(e, "Track")}>
                <a>Track</a>
              </li>
              <li onClick={(e) => handleClick(e, "Index")}>
                <a>Index</a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
