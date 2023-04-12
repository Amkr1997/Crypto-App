import React from "react";
import classes from "./CSS/CryptoCards.module.css";
import { NavLink } from "react-router-dom";

const CryptoCards = ({ news }) => {
  const { date, description, title, url } = news;

  return (
    <div className={classes.cards}>
      <div className={classes.card}>
        <img
          src="https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=802&q=80"
          alt="card-pic"
          className={classes["card-img-pic"]}
        />

        <div className={classes["card-details"]}>
          <span className={classes.tag}>#crypto</span>
          <span className={classes.tag}>#world</span>

          <div className={classes.title}>{title}</div>
          <p>{description.split(". ")[0]}</p>

          <button className={classes["read-more"]}>
            <NavLink to={url} target="_blank">
              Read more..
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CryptoCards;
