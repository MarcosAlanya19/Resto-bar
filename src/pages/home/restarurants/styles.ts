import styled from "styled-components";

export const Wrapper = styled.div`
	display: grid;
	background-color: #bfbfbf40;

	grid-template-columns: 1fr 2fr;
	gap: 150px;

	padding: 24px 100px;
`;

export const WrapperNumbers = styled.div`
	display: grid;
	gap: 5px;
	background-color: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
	border-radius: 24px;
	font-size: 32px;
	text-align: center;

	padding: 4px 36px;
`;

export const Title = styled.div`
	display: flex;
	justify-content: center;
	font-size: 64px;
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
