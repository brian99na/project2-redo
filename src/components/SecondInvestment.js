import React from 'react';
import { Link } from 'react-router-dom';

function SecondInvestment(props) {

    let priceDiff = props.inflation.priceNow - props.mainData.inputPrice

    return (
        <>
            <img src="https://findicons.com/files/icons/2219/dot_pictograms/256/usd_dollar_money_cash.png" alt='btc'/>
            <div className='inflationHome'>
                <h1 className='inflationHomeText'>By holding the US Dollar</h1>
                <h1 className='inflationHomeText'>your <span className='boldText'>${props.mainData.inputPrice}</span> has lost</h1>
                <h1 className='boldText'>{props.inflation.percentage}%</h1>
                <h1 className='inflationHomeText'>of its value since 2017.</h1>
                <Link to='/Inflation-Calculator'>
                    <button>Try out some different values for inflation</button>
                </Link>
            </div>
        </>
    )
}

export default SecondInvestment
