const CryptoReducer = (cryptoState, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...cryptoState,
      isLoading: true,
    };
  }

  if (action.type === "SET_DATA") {
    return {
      ...cryptoState,
      cryptoData: action.payload,
      isLoading: false,
      isError: false,
    };
  }

  if (action.type === "SET_ERROR") {
    return {
      ...cryptoState,
      isError: true,
    };
  }
  /*
  if (action.type === "SET_SINGLE_CRYPTO") {
    return {
      ...cryptoState,
      singleCryptoData: action.payload,
    };
  }

  if (action.type === "SET_HISTORICAL_DATA") {
    return {
      ...cryptoState,
      cryptoMarketData: action.payload,
    };
  }
  */
};

export default CryptoReducer;
