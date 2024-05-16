import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
  width: 350px;
  height: 150px;

  background-color: ${({ theme }) => theme.COLORS.BRAND_500};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 7px;
  overflow: hidden;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  

  > svg {
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    background-color: ${({ theme }) => theme.COLORS.BRAND_500};
    width: 100%;
    padding: 24px 0;
    text-align: center;
    font-weight: 700;
  }
`;