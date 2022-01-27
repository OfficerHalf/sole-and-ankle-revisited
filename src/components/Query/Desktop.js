import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

export const Desktop = styled.div`
  @media ${QUERIES.tablet} {
    display: none;
  }
`;
