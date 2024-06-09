import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 24px 0;

  @media (max-width: 800px) {
    padding: 16px;
  }
`;

export const Activator = styled.div`
  cursor: pointer;
`;
