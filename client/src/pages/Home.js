import React from "react";
import Search from "../components/Search/Search";
import Axios from "axios";
import Coin from "../components/Coin/Coin";
import { useEffect, useState } from "react";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Home = () => {
  const [listOfCryptos, setListOfCryptos] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [coinArr, setCoinArr] = useState([]);

  const isLoggedIn = localStorage.getItem("id_token");

  const { loading, data } = useQuery(QUERY_ME, { skip: !isLoggedIn });

  useEffect(() => {
    if (!loading && data) {
      const favCoins = data.me.coins.map((coin) => {
        return coin.cryptocurrency;
      });
      setCoinArr(favCoins || []);
    }
  }, [data]);

  // console.log(coinArr);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCryptos(response.data.coins);
        console.log(response.data.coins);
      }
    );
  }, []);

  const filteredCoins = listOfCryptos.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  });

  return (
    <div className="Home">
      <div className="py-2 col-2 cryptoHeader">
        <div className="searchBox">
          <label>
            <h5 className="mx-1 center">Search for a Cryptocurreny:</h5>
          </label>
          <input
            type="text"
            placeholder="Dogecoin..."
            onChange={(event) => {
              setSearchWord(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="col-8 card-holder">
        <div className="cryptoDisplay">
          {filteredCoins.map((coin) => {
            return (
              <Coin
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
                marketCap={coin.marketCap}
                key={coin.name}
                id={coin.id}
                arr={coinArr}
                showFavorites={isLoggedIn}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
