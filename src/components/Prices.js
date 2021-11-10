import { Link } from "react-router-dom";

function Prices(props) {
    

    return (
        <>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt='btc'/>
            <div className='prices'>
                <h1 className='regularFont secInvTitle' >your investment is now worth</h1>
                <h1 className='mediumFont priceRes'>${props.results.priceNow}</h1>
                <h1 className='regularFont pricesTitle'>that's a change of</h1>
                <h1 className='mediumFont priceRes'>{props.results.percentChange}%</h1>
                <Link to='/project-2/Crypto-Details'>
                    <button className='detailButton'>Try out a different cryptocurrency here</button>
                </Link>
            </div>
        </>
    )
}

export default Prices;
