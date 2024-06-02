import styled from "styled-components";

export const WrapperDashboard = styled.div`
	display: grid;
	grid-template-columns: 350px 1fr;
	min-height: 100vh;
	background-color: #e6e6e6;
	gap: 8px;
`;

export const ContainerLeft = styled.div`
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		min-height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 8px;
		margin-right: 8px;
	}
`;

export const Body = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background-color: #fff;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	overflow: hidden;
	padding: 24px 16px;
`;

const ButtonStyled = styled.button`
	border: none;
	border-radius: 12px;
	background-color: #4318ff;
`;

export const Button = styled(ButtonStyled)`
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	display: flex;
	padding: 12px;
	margin-top: 2px;
	margin-bottom: 2px;
	color: #fff;

	@media (min-width: 768px) {
		padding: 14px 22px;
	}
`;
