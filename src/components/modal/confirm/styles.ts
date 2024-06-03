import styled from "styled-components";

export const Container = styled.div`
	display: grid;
	gap: 16px;

	max-width: 380px;
	padding: 16px;
	text-align: center;
`;

export const Button = styled.div<{ cancel?: boolean }>`
	display: flex;
	justify-content: center;
	padding: 16px;
	border-radius: 8px;
	cursor: pointer;
	background-color: ${(props) => (props.cancel ? "#fce9e8" : "#fff")};
	color: ${(props) => (props.cancel ? "#c73510" : "#000")};
`;
