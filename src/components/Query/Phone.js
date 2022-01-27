import styled from "styled-components/macro";
import { QUERIES } from "../../constants";

export const Phone = styled.div`
  display: none;
  @media ${QUERIES.phone} {
    display: revert;
  }
`;
