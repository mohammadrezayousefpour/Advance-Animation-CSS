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
      <div className={classes.left}>
        <p>
          Counter It was 7 minutes after midnight. The dog was lying on the
          grass in the middle of the lawn in front of Mrs Shears’ house. Its
          eyes were closed. It looked as if it was running on its side, the way
          dogs run when they think they are chasing a cat in a dream. But the
          dog was not running or asleep. The dog was dead. There was a garden
          fork sticking out of the dog. The points of the fork must have gone
          all the way through the dog and into the ground because the fork had
          not fallen over. I decided that the dog was probably killed with the
          fork because I could not see any other wounds in the dog and I do not
          think you would stick a garden fork into a dog after it had died for
          some other reason, like cancer for example, or a road accident. But I
          could not be certain about this.
        </p>
      </div>
    </div>
  );
};

export default PictureScale;
