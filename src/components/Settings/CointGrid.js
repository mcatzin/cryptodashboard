import React from "react";
import styled from "styled-components";
import { AppContext } from "../../App/AppProvider";
import CoinTile from "./CoinTile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  margin-top: 40px;
`;

function getCoinsToDisplay(coinList) {}
export default function CoinGrid() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((coinKey, i) => (
            <div key={i}>
              <CoinTile coinKey={coinKey} />
            </div>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
