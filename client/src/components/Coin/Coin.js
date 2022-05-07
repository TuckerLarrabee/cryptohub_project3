import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1> {name}</h1>
      <img src={icon} />
      <h3> Price: {"$ " + price.toFixed(2)}</h3>
      <h3> Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
