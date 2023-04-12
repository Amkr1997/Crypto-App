import React, { useContext } from "react";
import classes from "./CSS/CurrencyDropdown.module.css";
import CryptoContext from "../Context/CryptoContext";

const CurrencyDropdown = () => {
  const curCtx = useContext(CryptoContext);
  const { currency, setCurrency } = curCtx;
  // console.log(currency);

  const currencyChangeHandler = (e) => {
    if (e.target.value === "In") {
      setCurrency("Us");
    } else {
      setCurrency("In");
    }
  };

  return (
    <form action="#">
      <select
        name="cur-exchange"
        id="cur-exchange"
        className={classes.selection}
        onChange={(e) => currencyChangeHandler(e)}
      >
        <option value={currency}>INR</option>
        <option value="#" disabled></option>
        <option value={currency}>USD</option>
      </select>
    </form>
  );
};

export default CurrencyDropdown;
