import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 8px;
  background-color: white;
  border-radius: 0 0 8px 8px;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 32px 24px 16px;
  }
`;
