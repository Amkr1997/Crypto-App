import React from "react";
import classes from "../Components/CSS/Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <NavLink to="/" className={classes.logo}>
        <span>CRYPTO-$-WORLD</span>
      </NavLink>
      <p>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
