import styled from "styled-components";

export const Card = styled.div`
	display: grid;
	grid-template-columns: 1.5fr 1.3fr;
	border-radius: 16px;
	overflow: hidden;
	background-color: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
	min-height: 200px;
	width: 600px;
`;
