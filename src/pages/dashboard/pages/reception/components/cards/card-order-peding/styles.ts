import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

export const BtnStatus = styled.button<{ selected: boolean }>`
	width: 100%;
	background-color: ${(props) => (props.selected ? "#bfbfbf" : "#007bff")};
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: ${(props) => (props.selected ? "not-allowed" : "pointer")};
	margin-right: 8px;

	&:hover {
		background-color: ${(props) => !props.selected && "#0056b3"};
	}

	&:active {
		animation: ${pulseAnimation} 0.3s ease-out;
	}
`;

export const BtnCancel = styled.button`
  width: 100%;
  background-color: #F14A41;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 8px;

  &:hover {
    background-color: #BA372F;
  }

  &:active {
    animation: ${pulseAnimation} 0.3s ease-out;
  }
`;
