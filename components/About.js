import React from 'react'
import styles from "@/styles/about.module.css";

export default function About() {
  return (
   <section id='About' className={styles.aboutbox}>
    <div className={styles.aboutTextbox}>
        <p className={styles.aboutText}>
        Shareriz is a user-friendly online platform that offers a seamless stock market tracking experience. Stay ahead of the game with real-time data and analysis of Nifty stocks. Make informed investment decisions with ease, thanks to Shareriz&apos;s comprehensive and intuitive interface. Quickly find the stock you&apos;re looking for with Shareriz&apos;s powerful search functionality. Elevate your stock market journey with Shareriz today.
        </p>
        <button>Track Now</button>
    </div>
   </section>
  )
}
