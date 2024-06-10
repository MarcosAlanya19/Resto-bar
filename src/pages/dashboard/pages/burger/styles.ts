import styled from "styled-components";

export const WrapperHeader = styled.div`
	border-radius: 8px;
	overflow: hidden;
	background-color: #edf3fc;
	margin-bottom: 4px;
	padding: 8px 16px;
	display: grid;
	grid-template-columns: 1fr 0.5fr 1fr 150px 1.5fr 100px 100px;
	gap: 16px;
`;

export const WrapperCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const StyledSearch = styled.input`
	width: 50%;
	margin-bottom: 24px;
	border: 1px solid #bfbfbf;
	min-height: 40px;
	padding: 4px 8px;
	font-size: 14px;
	border-radius: 8px;
`;
