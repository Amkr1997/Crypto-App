import React, { Fragment } from "react";
import Hero from "../Components/Hero";
import CryptoTable from "../Components/CryptoTable";
import { useState } from "react";

const Home = () => {
  const [coins, setCoins] = useState("");
  const pageLength = 10;
  //const [hidePagination, setHidePagination] = useState(true);

  return (
    <Fragment>
      <Hero coins={coins} setCoins={setCoins} />
      <CryptoTable coins={coins} pageLength={pageLength} />
    </Fragment>
  );
};

export default Home;
