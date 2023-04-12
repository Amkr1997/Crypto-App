import React, { Fragment, useState } from "react";
import classes from "./CryptoGraph.module.css";
import { useParams } from "react-router-dom";
//import CryptoContext from "../Context/CryptoContext";
import axios from "axios";
import { useEffect } from "react";
import { singleCoinData } from "../ApiConfig/api";
import { historicalChartData } from "../ApiConfig/api";
import CryptoChart from "../Components/CryptoChart";
//import ChartDays from "../ChartConfig/ChartDays";

const CryptoGraph = () => {
  const { id } = useParams();

  const [days, setDays] = useState("24h");
  const [chartArray, setChartArray] = useState([]);
  const [singleCoin, setSingleCoin] = useState();

  //console.log(id);

  /*
  const btns = ["24h", "7d", "30d", "90d", "180d", "365d", "max"];

  const switchStats = (key) => {
    if (key === "24h") {
      setDays(key);
    }

    if (key === "7d") {
      setDays(key);
    }

    if (key === "30d") {
      setDays(key);
    }

    if (key === "90d") {
      setDays(key);
    }

    if (key === "180d") {
      setDays(key);
    }

    if (key === "365d") {
      setDays(key);
    }

    if (key === "max") {
      setDays(key);
    }
  };
*/

  const getSingleCryptoData = async (url) => {
    try {
      const singleCrypto = await axios.get(url);
      const { data } = singleCrypto;
      //console.log(singleCrypto);
      setSingleCoin(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getHistoricalData = async (url) => {
    try {
      const historicalData = await axios.get(url);
      const { data } = historicalData;
      // console.log(historicalData);
      setChartArray(data.prices);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getHistoricalData(`${historicalChartData(id)}`);
  }, [id]);

  useEffect(() => {
    getSingleCryptoData(`${singleCoinData(id)}`);
  }, [id]);

  if (!chartArray) {
    return <div>..Loading...</div>;
  }

  return (
    <Fragment>
      <div>
        <p className={classes.coinTime}>
          Updated data of one year.
          {/*Date(singleCoin?.market_data.last_updated).split("G")[0]*/}
        </p>
      </div>
      <div className={classes.container}>
        <div className={classes.coinDesc}>
          <img
            src={singleCoin?.image.large}
            alt="coin pic"
            className={classes.coinImage}
          />
          <h3 className={classes.coinTitle}>{singleCoin?.name}</h3>
          {/*<h3 className={classes.coinSymbol}>{singleCoin?.symbol}</h3>*/}
          <h2 className={classes.rank}>Rank = {singleCoin?.coingecko_rank}</h2>

          <div className={classes.marketChange}>
            <p>Market :</p>
            <p
              className={
                singleCoin?.market_data.price_change_percentage_24h > 0
                  ? classes.marketDataPos
                  : classes.marketDataNeg
              }
            >
              {singleCoin?.market_data.price_change_percentage_24h}
            </p>
          </div>
          <h3 className={classes.coinPrice}>
            Price: ₹{singleCoin?.market_data.current_price["inr"]}
          </h3>
        </div>
        <div className={classes.coinChart}>
          <CryptoChart arr={chartArray} days={days} />
          {/*
            <div className={classes.timeBtns}>
            {btns.map((day) => {
              return (
                <button
                className={classes.btn}
                key={day}
                onClick={() => switchStats(day)}
                >
                  {day}
                </button>
              );
            })}
          </div>
          */}
        </div>
      </div>
    </Fragment>
  );
};

export default CryptoGraph;
