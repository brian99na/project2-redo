import { Link } from "react-router-dom";

function Prices(props) {
    
    const inputAmount = props.mainData.inputPrice && Number(props.mainData.inputPrice).toLocaleString()

    return (
        <>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt='btc'/>
            <div className='prices'>
                <h1 className='pricesHomeText'>your <span className='boldText'>${inputAmount}</span> is now worth</h1>
                <h1 className='boldText'>${props.results.priceNow}</h1>
                <h1 className='pricesHomeText'>that's a change of</h1>
                <h1 className='boldText'>{props.results.percentChange}%</h1>
                <Link to='/project-2/Crypto-Details'>
                    <button >Try out a different cryptocurrency here</button>
                </Link>
            </div>
        </>
    )
}

export default Prices;
