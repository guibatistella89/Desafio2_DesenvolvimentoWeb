import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.COLORS.GRAY_800};
  padding: 54px 32px;
  border-radius: 7px;

  min-width: 500px;
  
  display: flex;
  flex-direction: column;
  gap: 16px;

  > h1 {
    font-size: 24px;
    margin-bottom: 24px;
    line-height: 32px;
  }
  
`;
