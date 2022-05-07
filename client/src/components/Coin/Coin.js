import React from "react";

function Coin({ name, icon, price, symbol }) {

    let twoDec = price.toFixed(2);
    let internationalNumberFormat = new Intl.NumberFormat('en-US');
    let comma = internationalNumberFormat.format(twoDec);
    
    

  return (
    <div className="coin">
      <h1> {name}</h1>
      <img src={icon} />
      <h3> Price: {"$" + comma}</h3>
      <h3> Symbol: {symbol}</h3>
    </div>
  );
}

export default Coin;
