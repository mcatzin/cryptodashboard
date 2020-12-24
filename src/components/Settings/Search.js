import React from "react";
import styled from "styled-components";
import { backgroundColor2, fontSize2 } from "../Shared/Styles";
import { AppContext } from "../../App/AppProvider";
import _ from "lodash";
import fuzzy from "fuzzy";

const SearchGrid = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const SearchInput = styled.input`
  ${backgroundColor2}
  ${fontSize2}
  border: 1px solid;
  height: 25px;
  color: white;
  place-self: center left;
`;

// Delays invoking function using lodash
const handleFilter = _.debounce((inputValue, coinList, setFilterCoins) => {
  // Get all the coin symbols
  let coinSymbols = Object.keys(coinList);
  // Get all the coin names, map symbol to name
  let coinNmaes = coinSymbols.map((symbol) => coinList[symbol].CoinName);
  let allStringsToSearch = coinSymbols.concat(coinNmaes);

  // strings matching
  let fuzzyResults = fuzzy
    .filter(inputValue, allStringsToSearch, {})
    .map((result) => result.string);

  // Pick from the object a list of keys based on a callback function
  let filteredCoins = _.pickBy(coinList, (result, symKey) => {
    let coinName = result.CoinName;
    return (
      // The _.includes() method is used to find the value is in the collection or not
      _.includes(fuzzyResults, symKey) || _.includes(fuzzyResults, coinName)
    );
  });

  // set filteredCoins on the app
  setFilterCoins(filteredCoins);
}, 500);

// Filter coins from Search input event
function filterCoins(e, setFilteredCoins, coinList) {
  let inputValue = e.target.value;

  // Set coins to default first 100 coins
  if (!inputValue) {
    setFilteredCoins(null);
    return;
  }
  handleFilter(inputValue, coinList, setFilteredCoins);
}
export default function () {
  return (
    <AppContext.Consumer>
      {({ setFilteredCoins, coinList }) => (
        <SearchGrid>
          <h2>Search all coins</h2>
          <SearchInput
            onKeyUp={(e) => filterCoins(e, setFilteredCoins, coinList)}
          />
        </SearchGrid>
      )}
    </AppContext.Consumer>
  );
}
