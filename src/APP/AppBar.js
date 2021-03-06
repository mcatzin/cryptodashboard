import React from "react";
import styled, { css } from "styled-components";
import { AppContext } from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 220px auto 100px 100px;
  @media screen and (max-width: 575px) {
    grid-template-columns: 1fr;
    grid-column: auto;
    grid-row: auto;
    row-gap: 5px;
  }
`;
const ControlButtonElement = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      text-shadow: 0px 0px 60px #ffffff;
      color: #0f9994;
    `}
`;

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substr(1);
}
function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElement
          active={page === name}
          onClick={() => setPage(name)}
        >
          {toProperCase(name)}
        </ControlButtonElement>
      )}
    </AppContext.Consumer>
  );
}

export default function () {
  return (
    <Bar>
      <Logo>Crypto Dashboard</Logo>
      <div></div>
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  );
}
