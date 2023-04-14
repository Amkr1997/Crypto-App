import React, { useEffect, useState } from "react";
import classes from "./CSS/Carousel.module.css";
import { TrendingCoins } from "../ApiConfig/api";
import axios from "axios";
import AliceCarousel from "react-alice-carousel";
import FormatPrice from "./FormatPrice";

const Carousel = () => {
  const [trending, setTrending] = useState([]);

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins("inr"));
    setTrending(data);
    console.log(data);
  };

  useEffect(() => {
    fetchTrendingCoins();
  }, []);

  const items = trending?.map((coin) => {
    let profit = coin?.price_change_percentage_24h >= 0;

    return (
      <div className={classes["carousel-items"]}>
        <img
          src={coin?.image}
          alt={coin?.name}
          height="120"
          style={
            {
              /* marginBottom: 10 */
            }
          }
        />
        <span className={classes.symbol}>{coin?.symbol}</span>
        <span className={classes.price}>
          <FormatPrice price={coin?.current_price} />
        </span>
      </div>
    );
  });

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 4,
    },
  };

  return (
    <div className={classes.carousel}>
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
    </div>
  );
};

export default Carousel;
