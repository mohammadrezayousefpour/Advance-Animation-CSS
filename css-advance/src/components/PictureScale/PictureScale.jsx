import React from "react";
import classes from "./PictureScale.module.css";
import first from "../../images/1.jpg";
import second from "../../images/2.jpeg";
import third from "../../images/3.jpg";
import forth from "../../images/4.jpg";
const PictureScale = () => {
  return (
    <div className={classes.container}>
      <div className={classes.right}>
        <div className={classes.image}>
          <img src={first}></img>
        </div>
        <div className={classes.image}>
          <img src={second}></img>
        </div>
        <div className={classes.image}>
          <img src={third}></img>
        </div>
        <div className={classes.image}>
          <img src={forth} />
        </div>
      </div>
      <div className={classes.left}></div>
    </div>
  );
};

export default PictureScale;
