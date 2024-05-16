import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 32px;
`;

export const Header = styled.header`
  grid-column: span 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 22px;

  > nav {
    display: flex;
    gap: 16px;

    > button {
      width: 250px;
    }
  }
`;
export const Item = styled.div`
  width: 100%;
  padding: 15px 15px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  color: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 5px;
  
  &:hover {
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  }
`;


export const Info = styled.div`
  grid-column: span 4;
  
`;
