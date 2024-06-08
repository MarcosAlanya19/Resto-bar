import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	background-color: #bfbfbf40;

	grid-template-columns: 1fr 1fr;
	gap: 50px;

	padding: 24px 24px 48px 24px;
`;

export const WrapperNumbers = styled.div`
	display: grid;
	gap: 8px;
	background-color: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
	border-radius: 24px;
	text-align: center;

	padding: 16px 30px;
`;

export const WrapperCard = styled.div`
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	gap: 20px;
`;

export const Card = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	border-radius: 24px;
	background-color: ${(props) => props.theme.black};
	overflow: hidden;
	color: ${(props) => props.theme.white};

	img {
		width: 100%;
		height: 280px;
	}
`;
