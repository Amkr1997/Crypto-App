import React, { useState } from "react";
import CryptoContext from "./CryptoContext";
import { useEffect, useReducer } from "react";
import CryptoReducer from "../reducers/CryptoReducer";
import axios from "axios";

const API =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en";

const initialState = {
  isLoading: false,
  cryptoData: {},
  isError: false,
};

const CryptoProvider = ({ children }) => {
  const [cryptoState, dispatchState] = useReducer(CryptoReducer, initialState);
  const [currency, setCurrency] = useState("In");

  const getCryptoData = async (url) => {
    dispatchState({ type: "SET_LOADING" });

    try {
      const crypto = await axios.get(url);
      // console.log(crypto);
      dispatchState({ type: "SET_DATA", payload: crypto });
    } catch (error) {
      dispatchState({ type: "SET_ERROR" });
    }
  };

  useEffect(() => {
    getCryptoData(API);
  }, []);

  return (
    <CryptoContext.Provider
      value={{
        ...cryptoState,
        currency,
        setCurrency,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export default CryptoProvider;
