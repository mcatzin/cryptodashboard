import React from "react";
import styled from "styled-components";
import { AppContext } from "../../App/AppProvider";
import { SelectableTile } from "../Shared/Tile";

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export default function CoinGrid() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((coinKey, i) => (
            <div key={i}>
              <SelectableTile>{coinKey}</SelectableTile>
            </div>
          ))}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}