import React, { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import CryptoCards from "../Components/CryptoCards";
import classes from "./CryptoNews.module.css";

const CryptoNews = () => {
  const [news, setNews] = useState();

  const options = {
    method: "GET",
    url: "https://crypto-news16.p.rapidapi.com/news/top/5",
    headers: {
      "X-RapidAPI-Key": "81dd0242ddmsh9bfc3fd18df728bp1a4569jsneec545a4365c",
      "X-RapidAPI-Host": "crypto-news16.p.rapidapi.com",
    },
  };

  const fetchNews = async () => {
    const response = await axios.request(options);
    console.log(response);
    setNews(response.data);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Fragment>
      <h2 className={classes["heading-secondary"]}>Latest News</h2>
      <section className={classes["news-section"]}>
        {news?.map((curnews, index) => {
          return <CryptoCards key={index} news={curnews} />;
        })}
      </section>
    </Fragment>
  );
};

export default CryptoNews;
