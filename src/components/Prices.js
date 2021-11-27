import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRef } from "react";
import Video from './cionpiggie_VP9.webm'

function Prices(props) {
    
    const inputAmount = props.mainData.inputPrice && Number(props.mainData.inputPrice).toLocaleString()
    const bitcoinDetailsRef = useRef()


    const handleArrowClick = () => {
        bitcoinDetailsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      };

    return (
        <>
            <div className='prices'>
                {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/BTC_Logo.svg/183px-BTC_Logo.svg.png" alt='btc'/> */}
                <div className='coinFlip'>
                    <video controls autostart autoPlay loop controls={false} src={Video} type="video/webm" />
                </div>
                <div className='pricesLower'>
                <h1 className='pricesHomeText'>your <span className='boldText'>${inputAmount}</span> is now worth</h1>
                <h1 className='boldText'>${props.results.priceNow}</h1>
                <h1 className='pricesHomeText'>that's a change of</h1>
                <h1 className='boldText'>{props.results.percentChange}%</h1>
                <Link to='/Crypto-Details'>
                    <button className='pricesButton'>Try out a different cryptocurrency here</button>
                </Link>
                </div>
            </div>
            <MdOutlineKeyboardArrowDown className='pricesArrow' onClick={handleArrowClick} />
            <div className='bitcoinDetailsUpper'>
                <div className='bitcoinDetails' ref={bitcoinDetailsRef}>
                    <h1 >What is Bitcoin?</h1>
                    <p>Bitcoin is the first and most valuable cryptocurrency in the world.</p>
                    <p>It is often referred to as</p>
                    <h1 >Digital Gold</h1>
                    <p>and serves a similar purpose in hedging against inflation. The US Government has printed trillions of dollars over the past year and almost</p>
                    <a href='https://www.cityam.com/almost-a-fifth-of-all-us-dollars-were-created-this-year/' rel='noreferrer' target="_blank"><h1>1/5th of all US Dollars were created in 2020.</h1></a>
                    <p>Inflation is a large issue in the US and Bitcoin offers a solution in being a decentralization, deflationary asset that cannot be manipulated by central governments.    </p>
                    <a className='bitcoinLink' href='https://www.nerdwallet.com/article/investing/what-is-bitcoin' rel='noreferrer' target="_blank"><button >Read more about Bitcoin</button></a>
                </div>
            </div>
        </>
    )
}

export default Prices;
