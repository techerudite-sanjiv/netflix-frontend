import React from "react";
// import cn from "classnames";
// import styles from "./customButton.module.css";

const CustomButton = ({ label, size, backcolor, color, onClick,padding }) => {

  console.log(padding,"paddingpadding");

  const buttonStyle = {
        color: color,
        fontWeight: 700,
        fontSize: `${size}px`,
        backgroundColor: backcolor,
        padding:`${padding}`
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClick} className={`btn`}>
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
