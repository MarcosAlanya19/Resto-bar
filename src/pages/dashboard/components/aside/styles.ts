import styled from "styled-components";

export const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;

  > div:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.color.NEUTRAL_NEW[400]};
    padding-bottom: 12px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  padding-top: 24px;
  width: 100%;
  background-color: #fff;
`;

export const Body = styled.div`
  padding: 0 20px;
`;
