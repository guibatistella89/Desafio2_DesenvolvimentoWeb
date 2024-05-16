import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-bottom: 10px;
  }

  h2 {
    margin-bottom: 50px;

  }

  > main {
    display: flex;
    gap: 16px;    
  }
`;