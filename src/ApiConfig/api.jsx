export const coinsData = (currency) => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`;
};

export const singleCoinData = (id) => {
  return `https://api.coingecko.com/api/v3/coins/${id}`;
};

export const historicalChartData = (id, days = 365) => {
  return `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=${days}`;
};
