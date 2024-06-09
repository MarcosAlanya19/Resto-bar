import styled from "styled-components";

export const BtnTab = styled.button<{ selected: boolean }>`
	padding: 8px;
	border: none;
	border-radius: 8px;
	text-transform: uppercase;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background-color: ${(props) =>
		props.selected ? "#4117ff20" : "transparent"};
`;
