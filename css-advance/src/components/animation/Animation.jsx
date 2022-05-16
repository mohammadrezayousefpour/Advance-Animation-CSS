import React from "react";
import classes from "./Animation.module.css";

import cloud from "../../images/GettyImages-1308797233.webp";
const Animation = ({ pageNumber, setPageNumber }) => {
  return (
    <div className={classes.container}>
      <div className={classes.target}></div>
      {/* <div className={classes.cloud1}>
        <img src={cloud}></img>
      </div>
      <div className={classes.cloud2}>
        <img src={cloud}></img>
      </div> */}

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
      <button
        style={{
          width: "auto",
          height: "auto",
          padding: "5px 10px",
          marginTop: "20px",
        }}
        onClick={() => setPageNumber(3)}
      >
        Next
      </button>
    </div>
  );
};

export default Animation;
