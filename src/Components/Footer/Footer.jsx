/* eslint-disable no-unused-vars */
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// css file
import "./Footer.css";
import "animate.css";
const Footer = () => {
  return (
    <>
      <div className="site_footer">
        <div className="social_media_icons">
          <h1 className="heading-text">Follow us</h1>
          <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="copyright_sec">
          {" "}
          <CopyrightIcon />
          2023 Powered by{" "}
          <a
            href="https://techoverflow.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="animate__animated animate__flash"
          >
            Techoverflow
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
