import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

export const Tablet = styled.div`
  display: none;
  @media ${QUERIES.tablet} {
    display: revert;
  }
`;
