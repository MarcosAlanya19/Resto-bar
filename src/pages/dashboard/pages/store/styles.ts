import styled from "styled-components";

export const SearchWrapper = styled.input`
	width: 50%;
	margin-bottom: 24px;
	border: 1px solid #bfbfbf;
	min-height: 40px;
	padding: 4px 8px;
	font-size: 14px;
	border-radius: 8px;
`;

export const WrapperHeader = styled.div`
	border-radius: 8px;
	overflow: hidden;
	background-color: #edf3fc;
	display: grid;
	grid-template-columns: 1.5fr 1.5fr 1fr 1fr 1fr 1fr 1fr 100px;
	margin-bottom: 4px;
	padding: 8px 16px;
	gap: 16px
`;
