import styled from "styled-components";

export const WrapperCard = styled.div`
	display: grid;
	margin-top: 16px;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 16px;
`;

export const NoDataWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	color: #757575;
`;

export const NoDataText = styled.p`
	font-size: 18px;
	text-align: center;
`;
