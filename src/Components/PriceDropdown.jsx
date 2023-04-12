import React from "react";
import classes from "./CSS/PriceDropdown.module.css";

const PriceDropdown = () => {
  return (
    <form action="#">
      <select name="sort" id="sort" className={classes.selection}>
        <option value="lowest">Price(lowest)</option>
        <option value="#" disabled></option>
        <option value="highest">Price(highest)</option>
      </select>
    </form>
  );
};

export default PriceDropdown;
