import React, { Fragment, useState } from "react";
//import PriceDropdown from "./PriceDropdown";
//import CurrencyDropdown from "./CurrencyDropdown";
import classes from "../Components/CSS/CryptoTable.module.css";
import { useContext } from "react";
import CryptoContext from "../Context/CryptoContext";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import FormatPrice from "./FormatPrice";
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

const CryptoTable = ({ coins, pageLength }) => {
  const cryptoCtx = useContext(CryptoContext);
  const { isLoading, cryptoData } = cryptoCtx;

  console.log(cryptoData);
  // console.log(cryptoCtx);

  const [page, setPage] = useState(1);

  const { data } = cryptoData;
  console.log(data);

  const nextPage = () => {
    if (page < data.length / pageLength) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const searchedCoins = () => {
    return data?.filter(
      (elem) =>
        elem.name.toLowerCase().includes(coins.toLowerCase()) ||
        elem.symbol.toLowerCase().includes(coins.toLowerCase())
    );
  };

  //const searched = (searchedCoins()?.length / 10).toFixed(0);
  //console.log(searched);

  /*
  const [paginatedData] = searchedCoins();
  console.log(paginatedData);
*/

  if (isLoading) {
    return (
      <Fragment>
        <Loader />
      </Fragment>
    );
  }

  return (
    <Fragment>
      <section className={classes["drop-downs"]}>
        {/* <CurrencyDropdown /> */}
      </section>
      <section className={classes["crypto-table"]}>
        <h2 className={classes["heading-secondary"]}>
          Crypto Prices by Market Cap
        </h2>
        <div className={classes["table-head"]}>
          <table className={classes.table}>
            <thead className={classes["table-head"]}>
              <tr>
                <th className={classes["table-row"]}>Name</th>
                <th className={classes["table-row"]}>Price</th>
                <th className={classes["table-row"]}>24h Change</th>
                <th className={classes["table-row"]}>Market</th>
              </tr>
            </thead>
            <tbody className={classes["table-body"]}>
              {searchedCoins()
                ?.slice(page * pageLength - pageLength, page * pageLength)
                .map((elem, index) => {
                  const profit = elem.market_cap_change_percentage_24h > 0;
                  //console.log(searchedCoins);
                  return (
                    <tr>
                      <th>
                        <NavLink
                          to={`/cryptograph/${elem.id}`}
                          className={classes["table-data-clickable"]}
                        >
                          <img src={elem.image} alt="crypto-pic" />
                          <div className={classes["crypto-title"]}>
                            <span className={classes.symbol}>
                              {elem.symbol}
                            </span>
                            <span className={classes.title}>{elem.name}</span>
                          </div>
                        </NavLink>
                      </th>
                      <td className={classes["table-data"]}>
                        <FormatPrice price={elem.current_price} />
                      </td>
                      <td
                        className={
                          profit
                            ? `${classes["table-data"]} ${classes.profit}`
                            : `${classes["table-data"]} ${classes.loss}`
                        }
                      >
                        {elem.market_cap_change_percentage_24h.toFixed(2)}
                      </td>
                      <td className={classes["table-data"]}>
                        <FormatPrice price={elem.market_cap} />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </section>

      <section className={classes.pagination}>
        {data?.length > 0 && (
          <div>
            <span>
              <BsArrowLeftCircleFill
                className={page === 1 ? classes.disabled : classes.arrows}
                onClick={() => prevPage()}
              />
            </span>
            {[...Array(data?.length / pageLength)].map((_, index) => {
              return (
                <span
                  className={page === index + 1 ? classes["page-btns"] : ""}
                  onClick={() => {
                    setPage(index + 1);
                  }}
                >
                  {index + 1}
                </span>
              );
            })}
            <span>
              <BsArrowRightCircleFill
                className={
                  page === data.length / pageLength
                    ? classes.disabled
                    : classes.arrows
                }
                onClick={() => nextPage()}
              />
            </span>
          </div>
        )}
      </section>
    </Fragment>
  );
};

export default CryptoTable;
