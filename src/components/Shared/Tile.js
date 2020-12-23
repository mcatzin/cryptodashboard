import styled from "styled-components";
import {
  subtleBoxShadow,
  lightGreenBackground,
  whiteBoxShadow,
  redBoxShadow,
} from "./Styles";

export const Tile = styled.div`
  ${subtleBoxShadow}
  ${lightGreenBackground}
padding: 10px;
`;

export const SelectableTile = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${whiteBoxShadow}
  }
`;
