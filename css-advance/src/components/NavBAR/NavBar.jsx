import React from "react";
import classes from "./NavBar.module.css";
import linkedIn from "../../images/5282542_linkedin_network_social network_linkedin logo_icon.png";
import insta from "../../images/5282544_camera_instagram_social media_social network_instagram logo_icon.png";
import faceBook from "../../images/5282541_fb_social media_facebook_facebook logo_social network_icon.png";
import whatsApp from "../../images/5282549_call_chat_mobile_whatsapp_whatsapp logo_icon.png";
const NavBar = ({ pageNumber, setPageNumber }) => {
  return (
    <div className={classes.container}>
      <div className={classes.iconContainer}>
        <img src={linkedIn}></img>
        <img src={insta}></img>
        <img src={whatsApp}></img>
        <img src={faceBook}></img>
      </div>
      <div className={classes.button}> contact Me</div>
    </div>
  );
};

export default NavBar;
