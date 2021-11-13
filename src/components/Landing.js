import React, { useState } from "react";

function Landing(props) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setMainData({ ...props.mainData, inputPrice: value });
    setValue("");
    props.setHomepageVisible(true)
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    props.setHomepageVisible(false)
  };

  return (
    <>
      <h1>you invested</h1>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          type="text"
          onChange={handleChange}
          placeholder="$1000"
        ></input>
      </form>
      <h2>into Bitcoin in 2017.</h2>
    </>
  );
}

export default Landing;
