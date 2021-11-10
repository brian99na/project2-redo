import React, { useRef, useState } from "react";
import Prices from "./Prices";
import SecondInvestment from "./SecondInvestment";
import Landing from "./Landing";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Homepage(props) {
  const [homepageVisible, setHomepageVisible] = useState(false)
  const priceRef = useRef();
  const inflationRef = useRef();

  const handleArrowClick = () => {
    inflationRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <div className='homepage'>
      <section>
        <Landing priceRef={priceRef} mainData={props.mainData} setMainData={props.setMainData} setHomepageVisible={setHomepageVisible}/>
      </section>
      <section ref={priceRef}>
        {homepageVisible && <Prices results={props.results} />}
      </section>
      {homepageVisible && <MdOutlineKeyboardArrowDown onClick={handleArrowClick} />}
      <section ref={inflationRef}>
        {homepageVisible && <SecondInvestment inflation={props.inflation} />}
      </section>
    </div>
  );
}

export default Homepage;
