import React, { useEffect, useRef, useState } from "react";

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
  const [chartData, setChartData] = useState([])

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

  const chartApiCall = () => {
    let day = new Date()
    let dayValue = (2021 - Number(results.date.slice(6, 10))) * 365 + ((Number(day.getMonth()) + 1) - Number(results.date.slice(3, 5))) * 30
    fetch(
      `https://api.coingecko.com/api/v3/coins/${results.coinId}/market_chart?vs_currency=usd&days=${dayValue}&interval=monthly`
    )
      .then((res) => res.json())
      .then((data) => setChartData(data.prices))
  };

  const cryptoCalculator = () => {
    const currentPrice = ((results.price * price.current) / price.past).toFixed(2);
    const percentChange = ((currentPrice / results.price) * 100).toFixed(0);
    const priceLocale = Number(currentPrice).toLocaleString();
    const percentLocale = Number(percentChange).toLocaleString();
    setCryptoCalc({ priceNow: priceLocale, percentChange: percentLocale })
  };

  const scrollFunction = () => {
    resultsJSX &&  focusDropDown.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
}

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
    combList.map((cryptoItem) => {
      let coinImage = `https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/32/${cryptoItem.id}.png`
      return (
      <div className='cryptoJSXDiv'>
        <img className='cryptoCoinImage' alt='coinImage' onError={(e)=>{e.target.src='https://assets.coingecko.com/coins/images/19978/thumb/logo.f3a6bd24.png?1636355493'}} src={coinImage}/>
        <span
          className="cryptoElement regularFont"
          onClick={(e) => handleCryptoClick(e, cryptoItem.id, cryptoItem.name)}>
          {cryptoItem.name}
        </span>
      </div>
    )});

    let iconWebsite = `https://raw.githubusercontent.com/ErikThiart/cryptocurrency-icons/master/128/${results.coinId}.png`

  // Results JSX

  const resultsJSX = (
    <div className="resultsJSX" ref={focusDropDown}>
      <div className='resultsJSXBorder'>
        <img className='cryptoCoinImage'src={iconWebsite} alt='coinImage' onError={(e)=>{e.target.src='https://www.pngall.com/wp-content/uploads/2/Question-Mark-PNG-Image.png'}}/>
        <div className='resultsJSXText'>
          <h1 className='cryptoText'>
            Your <span>${results.price}</span> is now worth:
          </h1>
          <h1 className='boldText'>${cryptoCalc.priceNow}</h1>
          <h1 className='cryptoText'>a change of:</h1>
          <h1 className='boldText'>{cryptoCalc.percentChange}%</h1>
        </div>
      </div>
    </div>
  );

  // Use Effects

  useEffect(() => {
    cryptoApiCall()
  }, [])

  useEffect(() => {
    currentApiCall();
    chartApiCall()
  }, [results])

  useEffect(() => {
    oldApiCall();
    scrollFunction()
  }, [price.current])

  useEffect(() => {
    (price.current && price.past) && cryptoCalculator();
    setParameters({
      date: '',
      price: '',
      coin: '',
    })
  }, [price])


  const dropDown1 = dropDown ? "cryptoDropDownActive" : null;
  const dropDownCSS = parameters.coin.length > 0 ? dropDown1 : null;
  const dropDownVal = `cryptoDropDown ${dropDownCSS}`;

  console.log(chartData)

  return (
    <div className='cryptoUpper'>
      <div className="cryptoMain">
        <form className="cryptoForm" onSubmit={handleSubmit}>
          <h1 className="regularFont priceDetailTitle">On </h1>
          <input
            type="text"
            placeholder="DD-MM-YYYY"
            onChange={handleDateChange}
            value={parameters.date}
          ></input>
          <h1 >You invested</h1>
          <input
            type="text"
            onChange={handlePriceChange}
            value={parameters.price}
            placeholder="$"
          ></input>
          <h1>into</h1>
          <input
            type="text"
            onChange={handleCoinChange}
            value={parameters.coin}
            placeholder="Enter Coin"
          ></input>
          <div className={dropDownVal}>
            {cryptoJSX}
          </div>
          <button onClick={handleSubmit}>Calculate</button>
        </form>
        <div className='inflationDivide'></div>
        {resultsJSX}
        {result && <MdOutlineKeyboardArrowDown className='homepageArrow' onClick={handleArrowClick} />}
      </div>
    </div>
  );
}

export default PricesDetails;
