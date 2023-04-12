import React, { Fragment } from "react";
import classes from "../Components/CSS/Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <NavLink to="/" className={classes.logo}>
          <span>CRYPTO-$-WORLD</span>
        </NavLink>
        <nav className={classes.navigation}>
          <ul className={classes["main-nav"]}>
            <li>
              <NavLink to="/news" className={classes.navlinks}>
                News
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
    </Fragment>
  );
};

export default Header;
