import React from "react";
import { useState } from "react";

function Coin({ name, icon, price, symbol, marketCap }) {

    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
      };

    let twoDec = price.toFixed(2);
    let internationalNumberFormat = new Intl.NumberFormat('en-US');
    let comma = internationalNumberFormat.format(twoDec);
    
    function nFormatter(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
   }

   let cap = nFormatter(marketCap);
   


  return (
    <div className="coin">
        <h1 className="px-1"> {name} {"(" + symbol + ")"} </h1>
        <img src={icon} />
        <div className="like-container">
            <div>
                <h3 className="px-3"> Price: {"$" + comma}</h3>
                <h3 className="px-3">Market Cap: {"$" + cap}</h3>
            </div>
            <button className={isActive ? 'liked': null} onClick={toggleClass} id="like-button"></button>
        </div>
    </div>
  );
}

export default Coin;
