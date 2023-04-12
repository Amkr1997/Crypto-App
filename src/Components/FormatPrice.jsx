//import { useContext } from "react";
//import CryptoContext from "../Context/CryptoContext";

/*
const FormatPrice = ({ price }) => {
  const exchangeValue = useContext(CryptoContext);
  const { currency } = exchangeValue;
  //console.log(currency);

  return Intl.NumberFormat(`en-${currency}`, {
    style: "currency",
    currency: `${currency === "In" ? "INR" : "USD"}`,
    maximumFractionDigits: 2,
  }).format(currency === "In" ? price : price / 82);
};
*/

const FormatPrice = ({ price }) => {
  return Intl.NumberFormat(`en-In`, {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price);
};

export default FormatPrice;
