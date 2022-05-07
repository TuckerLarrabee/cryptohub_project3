import React from "react";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import { QUERY_CRYPTOS} from "../../utils/queries"
import { useQuery } from "@apollo/client";

function Search() {
    const { loading, data } = useQuery(QUERY_CRYPTOS);
    const cryptos = data?.cryptos || [];
    console.log(loading, cryptos);


  // const [cryptos, setCryptos] = useState([]);

  // useEffect(() => {
  //   const loadCryptos = async () > {
  //     const response = await
  //   }
  // })



  return (
    <form className="py-2 mx-2" id="cryptoForm">
            <div className="searchDiv">
                <label>
                  <h5 className="center">Search for a Cryptocurreny:</h5>
                </label>
                <input
                  type="text"
                  name="cryptoName"
                  id="cryptoName"
                  placeholder="Litecoin"
                  className="input"
                />
                
                  <button className="mx-1" type="submit" id="searchBtn">
                    Search
                  </button>
            </div>
    </form>
  );
}

export default Search;
