import React from "react";
import { useEffect, useState } from "react";
import { QUERY_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Axios from "axios";
import Coin from "../components/Coin/Coin";

const Profile = () => {
  const [listOfCryptos, setListOfCryptos] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [coinArr, setCoinArr] = useState([]);

  const { loading, data } = useQuery(QUERY_ME);

  useEffect(() => {
    if (data) {
      const favCoins = data.me?.coins?.map((coin) => {
        return coin.cryptocurrency;
      });
      setCoinArr(favCoins || []);
    }
  }, [data]);

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCryptos(response.data.coins);
        console.log(response.data.coins);
      }
    );
  }, []);

  const favoritedCoins = data
    ? listOfCryptos.filter((coin) => {
        console.log("COIN", coin.id);
        console.log("COINARR", coinArr);
        return coinArr.includes(coin.id);
      })
    : [];

  return (
    <div>
      <div
        style={{
          display: "flex",
          "flex-direction": "column",
          "align-items": "center",
          "flex-wrap": "wrap",
        }}
      >
        <h1>Hello, {data?.me?.username}</h1>
        <div className="profile-container" 
             style={{"display": "flex",
                     "flex-wrap": "wrap",
                     "justifyContent": "center"
        }}>
          {favoritedCoins.map((coin) => {
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
                showFavorites={true}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
