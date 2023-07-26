import React from "react";
// import cn from "classnames";
// import styles from "./customButton.module.css";

const CustomButton = ({ label, size, backcolor, color, onClick,padding }) => {

  const buttonStyle = {
        color: color,
        fontWeight: 700,
        fontSize: `${size}px`,
        backgroundColor: backcolor,
     
  };

  return (
    <div>
      <button style={buttonStyle} onClick={onClick} className={`btn ${padding}`}>
        {label}
      </button>
    </div>
  );
};

export default CustomButton;
