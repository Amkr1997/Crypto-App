import React, { Fragment } from "react";
import classes from "./CSS/Hero.module.css";
import { BiSearch } from "react-icons/bi";

const Hero = ({ coins, setCoins }) => {
  const inputHandler = (e) => {
    setCoins(e.target.value);
    //setPageLength(coins);
    //setHidePagination(false);
  };

  return (
    <Fragment>
      <section className={classes["hero-section"]}>
        <div className={classes.hero}>
          <div className={classes["hero-text-box"]}>
            <h1 className={classes["heading-primary"]}>Explore the currency</h1>
            <p className={classes["heading-desc"]}>
              Data provided of the past 24 hours of the market
            </p>
          </div>
          <div className={classes["hero-search-box"]}>
            <BiSearch
              className={classes["search-icon"]}
              name="search-outline"
            />
            <input
              type="text"
              placeholder="Search for crypto"
              className={classes["search-bar"]}
              value={coins}
              onChange={(e) => {
                inputHandler(e);
              }}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
