import React, { useState } from "react";
import styles from "@/styles/customselect.module.css";

function CustomSelect({ options, onChange }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [hoverstyle, setHoverstyle] = useState("none");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.customSelectContainer}`}>
      <div
        className={`${styles.selectedOption}`}
        onMouseOver={() => {
            hoverstyle==='none'?
          setHoverstyle("block"):setHoverstyle('none');
        }}
      >
        {selectedOption}
      </div>
      <ul className={`${styles.optionsList}`} style={{ display: hoverstyle }}>
        {options.map((option) => (
          <li
            key={option}
            className={`${styles.option}`}
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