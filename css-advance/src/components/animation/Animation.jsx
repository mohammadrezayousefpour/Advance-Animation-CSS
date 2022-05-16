import React from "react";
import classes from "./Animation.module.css";

const Animation = ({ pageNumber, setPageNumber }) => {
  return (
    <div>
      <div className={classes.target}></div>
      <div></div>
      <button
        style={{
          width: "auto",
          height: "auto",
          padding: "5px 10px",
          marginTop: "20px",
        }}
        onClick={() => setPageNumber(0)}
      >
        Back
      </button>
    </div>
  );
};

export default Animation;
