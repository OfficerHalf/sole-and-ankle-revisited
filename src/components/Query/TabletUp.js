import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

export const TabletUp = styled.div`
  @media ${QUERIES.phone} {
    display: none;
  }
`;
