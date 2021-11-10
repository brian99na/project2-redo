import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";

function PricesDetails(props) {
  const [cryptoList, setCryptoList] = useState([]);
  const [parameters, setParameters] = useState({
    date: '',
    price: '',
    coin: '',
  });
  const [results, setResults] = useState({
    date: '',
    price: '',
    coin: '',
    coinId: '',
  });
  const [price, setPrice] = useState({current: '', past: ''});
  const [cryptoCalc, setCryptoCalc] = useState({
    priceNow: '',
    percentChange: '',
  });
  const [dropDown, setDropDown] = useState(false);
  const [resultJSX, setResultJSX] = useState(false);
  const focusDropDown = useRef();

  // focusDropDown.current.scrollIntoView({
  //   behavior: "smooth",
  //   block: "center",
  //   inline: "center",
  // });

  // Api Calls and Calculating Functions

  const cryptoApiCall = () => {
    fetch("https://api.coingecko.com/api/v3/coins/list")
      .then((res) => res.json())
      .then((data) => setCryptoList(data));
  };

  const currentApiCall = () => {
    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${results.coinId}&vs_currencies=usd`
    )
      .then((res) => res.json())
      .then((data) => data[results.coinId] && setPrice({...price, current: data[results.coinId].usd}));
  };

  const oldApiCall = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${results.coinId}/history?date=${results.date}&localization=false`
    )
      .then((res) => res.json())
      .then((data) => data.market_data && setPrice({...price, past: data.market_data.current_price.usd})
      );
  };

  const cryptoCalculator = () => {
    const currentPrice = ((results.price * price.current) / price.past).toFixed(2);
    const percentChange = ((currentPrice / results.price) * 100).toFixed(0);
    const priceLocale = Number(currentPrice).toLocaleString();
    const percentLocale = Number(percentChange).toLocaleString();
    setCryptoCalc({ priceNow: priceLocale, percentChange: percentLocale })
  };

  // Handle Changes, Clicks, and Submits

  const handleDateChange = (e) => {
    setParameters({ ...parameters, date: e.target.value });
    setResultJSX(false);
  };

  const handlePriceChange = (e) => {
    setParameters({ ...parameters, price: e.target.value });
    setResultJSX(false);
  };

  const handleCoinChange = (e) => {
    setDropDown(true);
    setParameters({ ...parameters, coin: e.target.value });
    setResultJSX(false);
  };

  const handleCryptoClick = (e, cryptoItemId, cryptoItemName) => {
    setParameters({ ...parameters, coin: cryptoItemName, coinId: cryptoItemId });
    setDropDown(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResults({...parameters});
    setResultJSX(true);
  };

console.log(results)
console.log(parameters)
console.log(price)

  // Crypto Drop Down List

  const cryptoStartCoin =
    parameters.coin &&
    cryptoList.filter((cryptoItem) =>
      cryptoItem.name.match("^" + parameters.coin)
    );

  const cryptoIncludeCoin =
    parameters.coin &&
    cryptoList.filter((cryptoItem) =>
      cryptoItem.name.match("(?<!^)" + parameters.coin)
    );

  const combList = parameters.coin && cryptoStartCoin.concat(cryptoIncludeCoin);

  const cryptoJSX =
    (parameters.coin && dropDown) &&
    combList.map((cryptoItem) => (
      <p
        className="cryptoElement regularFont"
        onClick={(e) => handleCryptoClick(e, cryptoItem.id, cryptoItem.name)}
      >
        {cryptoItem.name}
      </p>
    ));

  // Results JSX

  const resultsJSX = resultJSX && (
    <div className="resultsJSX" ref={focusDropDown}>
      <h1 className="regularFont">
        Your <span className="resultsJSXCoin">{results.coin}</span> is now worth
      </h1>
      <h1 className="mediumFont">${cryptoCalc.priceNow}</h1>
      <h1 className="regularFont">a change of</h1>
      <h1 className="mediumFont">{cryptoCalc.percentChange}%</h1>
    </div>
  );

  // Use Effects

  useEffect(() => {
    cryptoApiCall()
  }, [])

  useEffect(() => {
    currentApiCall();
  }, [results])

  useEffect(() => {
    oldApiCall();
  }, [price.current])

  useEffect(() => {
    (price.current && price.past) && cryptoCalculator();
    setParameters({
      date: '',
      price: '',
      coin: '',
    })
  }, [price])


  const dropDownCSS = dropDown ? "cryptoDropDownActive" : null;
  const dropDownVal = `cryptoDropDown ${dropDownCSS}`;

  return (
    <div className="priceDetailMain">
      <form className="priceDetailForm" onSubmit={handleSubmit}>
        <span className="regularFont priceDetailTitle">On </span>
        <input
          type="text"
          placeholder="DD-MM-YYYY"
          onChange={handleDateChange}
          value={parameters.date}
        ></input>
        <h1 className="regularFont">You invested</h1>
        <input
          type="text"
          onChange={handlePriceChange}
          value={parameters.price}
          placeholder="$"
        ></input>
        <p className="regularFont">into</p>
        <input
          type="text"
          onChange={handleCoinChange}
          value={parameters.coin}
          placeholder="Enter Coin"
        ></input>
        <div className={dropDownVal}>{cryptoJSX}</div>
        <button onClick={handleSubmit}>Calculate</button>
      </form>
      {resultsJSX}
    </div>
  );
}

export default PricesDetails;
