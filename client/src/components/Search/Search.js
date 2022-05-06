import React from "react";

function Search() {
  return (
    <form className="py-2 mx-2" id="cryptoForm">
            <div className="searchDiv">
                <label>
                  <h5 class="center">Search for a Cryptocurreny:</h5>
                </label>
                <input
                  name="cryptoName"
                  id="cryptoName"
                  placeholder="Litecoin"
                  class="input"
                />
                
                  <button className="mx-1" type="submit" id="searchBtn">
                    Search
                  </button>
            </div>
    </form>
  );
}

export default Search;
