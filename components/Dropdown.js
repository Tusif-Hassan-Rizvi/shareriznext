import React,{useState} from 'react'
import styles from "@/styles/customselect.module.css";

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.dropdown}>
    <button className={styles.dropdownbtn} onClick={() => setIsOpen(!isOpen)}>Dropdown</button>
    {isOpen && (
        <ul className={styles.dropdownContent}>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
        </ul>
      )}
  </div>
  
  )
}
