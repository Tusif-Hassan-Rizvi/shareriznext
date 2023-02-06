import React, { useState } from "react";
import styles from "@/styles/customselect.module.css";
import {RiArrowDropDownLine, RiArrowDropUpLine}  from "react-icons/ri";

function CustomSelect({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [hoverstyle, setHoverstyle] = useState("none");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={styles.customSelectContainer}>
      <div
        className={styles.selectedOption}
        onClick={() => {
            hoverstyle==='none'?
          setHoverstyle("flex"):setHoverstyle('none');
        }}
      >
        <span>{selectedOption}</span>
        {hoverstyle === 'none' ? (
    <RiArrowDropDownLine style={{ fontSize: '25px', position: 'absolute', right: '0' }} />
  ) : (
    <RiArrowDropUpLine style={{ fontSize: '25px', position: 'absolute', right: '0' }} />
  )}
      </div>
      <ul className={styles.optionsList} style={{ display: hoverstyle}}>
        {options.map((option) => (
          <li
          style={selectedOption === option?{color: "gray", pointerEvents: "none", cursor: 'default'}:{color: "#0e2431", pointerEvents: "auto", cursor: 'pointer'}}
            key={option}
            className={styles.option}
            onClick={() => {
              setSelectedOption(option);
              onChange(option);
              setHoverstyle("none");
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomSelect;
