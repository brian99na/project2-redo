import React, { useRef, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import InflationChart from "./InflationChart";

function SecondInvestmentDetails(props) {
  const [inflation, setInflation] = useState({data: null, percentage: null, priceNow: null, amountLost: null})
  const [inputValue, setInputValue] = useState({date: null, price: null})
  const [result, setResult] = useState({date: null, price: null})
  const [jsx, setJsx] = useState(false);
  const inflationRef = useRef();

  const inflationApiCall = () => {
    fetch("https://data.nasdaq.com/api/v3/datasets/RATEINF/CPI_USA.json?api_key=dDi1qzdRACZxKWbNGJRx")
      .then((res) => res.json())
      .then((data) => setInflation({...inflation, data: data.dataset.data}))
  };

  const inflationCalculator = () => {
    const indexValue = inputValue.date && (12 * (2021 - Number(inputValue.date.slice(6, 10)))) + (9 - Number(inputValue.date.slice(3, 5)))
    const percentage = indexValue && (((274.31 - Number(inflation.data[indexValue][1]))/Number(inflation.data[indexValue][1])) * 100).toFixed(2);
    const currentPrice = ((percentage/100 + 1) * result.price).toFixed(2)
    const amountLost = Number(currentPrice - result.price).toFixed(2)
    setInflation({...inflation, percentage: percentage, priceNow: currentPrice, amountLost: amountLost})
  }

  const handleDateChange = (e) => {
    setInputValue({...inputValue, date: e.target.value});
    setJsx(false)
  };

  const handlePriceChange = (e) => {
    setInputValue({...inputValue, price: e.target.value});
    setJsx(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setResult({...inputValue})
    setJsx(true);
  };

  const inflationJSX = jsx && (
    <div className='inflationJsx'ref={inflationRef}>
      <h1 className='inflationText'> Cumulative Inflation Rate: </h1>
      <h1 className='boldText'>{inflation.percentage}%</h1>
      <h1 className='inflationText'>Inflated Price:</h1>
      <h1 className='boldText'>${inflation.priceNow}</h1>
      <h1 className='inflationText'>You have lost</h1>
      <h1 className='boldText'>${inflation.amountLost}</h1>
      <h1 className='inflationText'>of value by holding </h1>
      <h1 className='boldText'>the US Dollar</h1>
    </div>
  );

  const scrollFunction = () => {
      inflationJSX && inflationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  useEffect(() => {
    inflationApiCall()
  }, [])

  useEffect(() => {
    inflationCalculator()
    scrollFunction()
    setInputValue({date: '', price: ''})
  }, [result])

  return (
    <div className='inflationMain'>
      <form className='inflationForm'handleSubmit={handleSubmit}>
        <h1>You held your</h1>
        <input
          value={inputValue.price}
          onChange={handlePriceChange}
          type="text"
          placeholder="$"
        ></input>
        <h1 className="regularFont">in cash since</h1>
        <input
          value={inputValue.date}
          onChange={handleDateChange}
          type="text"
          placeholder="DD-MM-YYYY"
        ></input>
        <br />
        <button onClick={handleSubmit}>Enter</button>
      </form>
      <div className='inflationResults'>
      {inflationJSX}
      </div>
      <div>
        <InflationChart inflation={inflation} jsx={jsx} result={result}/>
      </div>
    </div>  
  );
}

export default SecondInvestmentDetails;
