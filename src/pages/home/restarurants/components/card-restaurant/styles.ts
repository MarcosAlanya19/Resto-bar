import styled from "styled-components";

export const Card = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	border-radius: 24px;
	background-color: ${(props) => props.theme.black};
	overflow: hidden;
	color: ${(props) => props.theme.white};

	img {
		width: 100%;
		height: 100%;
	}
`;
