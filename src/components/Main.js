import React, { useState, useEffect } from "react";
import { Route } from "react-router";
import Homepage from "./Homepage";
import CryptoPage from './CryptoPage';
import InflationPage from './InflationPage';

function Main(props) {
  const [mainData, setMainData] = useState({inputPrice: null, date: '30-03-2017', coin: 'bitcoin'})
  const [coinPrice, setCoinPrice] = useState({current: null, past: null});
  const [results, setResults] = useState({priceNow: null, percentChange: null});
  const [inflation, setInflation] = useState({data: null, percentage: null})


  const currentApiCall = () => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
    )
      .then((res) => res.json())
      .then((data) => setCoinPrice({...coinPrice, current: data[mainData.coin].usd}))
  };

  const oldApiCall = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/history?date=${mainData.date}&localization=false`
    )
      .then((res) => res.json())
      .then((data) => setCoinPrice({...coinPrice, past: data.market_data.current_price.usd}))
  };

  const inflationApiCall = () => {
    fetch("https://data.nasdaq.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=dDi1qzdRACZxKWbNGJRx")
      .then((res) => res.json())
      .then((data) => setInflation({...inflation,data: data.dataset.data}))
  };

  const cryptoCalculator= () => {
    const currentPrice = ((mainData.inputPrice * coinPrice.current)/coinPrice.past).toFixed(2);
    const percentChange = ((currentPrice/ mainData.inputPrice) * 100).toFixed(0);
    const priceLocale = Number(currentPrice).toLocaleString();
    const percentLocale = Number(percentChange).toLocaleString();
    setResults({ priceNow: priceLocale, percentChange: percentLocale });
  };

  const inflationCalculator = () => {
    const indexValue = (12 * (2021 - Number(mainData.date.slice(6, 10)))) + (9 - Number(mainData.date.slice(3, 5)))
    const percentage = inflation.data && (((274.31 - Number(inflation.data[indexValue][1]))/Number(inflation.data[indexValue][1])) * 100).toFixed(2)
    setInflation({...inflation, percentage: percentage})
  }

  useEffect(() => {
    currentApiCall()
    inflationApiCall()
  }, [])

  useEffect(() => {
    oldApiCall()
    cryptoCalculator()
    inflationCalculator()
  }, [mainData])

  const handleRoutePageClass = props.navbarClickable ? 'routePageClickable': null;
  const routePageClass = `routePage ${handleRoutePageClass}`

  return (
    <div className={routePageClass}>
        <Route
          exact
          path="/"
          render={() => <Homepage results={results} coinPrice={coinPrice} mainData={mainData} setMainData={setMainData} inflation={inflation}/>}
        />
        <Route
          exact
          path="/Crypto-Details"
          render={() => <CryptoPage/>}
        />
        <Route
          exact
          path="/Inflation-Calculator"
          render={() => <InflationPage/>}
        />
    </div>
  );
}

export default Main;
