import styled from "styled-components";
import {
  subtleBoxShadow,
  lightGreenBackground,
  greenBoxShadow,
  redBoxShadow,
} from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightGreenBackground}
padding: 10px;
`;

export const SelectableTile = styled.div`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow}
  }
`;
