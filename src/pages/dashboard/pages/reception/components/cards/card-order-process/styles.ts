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

export const BtnStatus = styled.button`
	width: 100%;
	background-color: #007bff;
	color: white;
	border: none;
	padding: 8px 16px;
	border-radius: 4px;
	cursor: pointer;
	margin-right: 8px;

	&:hover {
		background-color: #0056b3;
	}

	&:active {
		animation: ${pulseAnimation} 0.3s ease-out;
	}
`;
