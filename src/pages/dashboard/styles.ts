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

export const Container = styled.div`
	min-height: 100vh;
	position: relative;

	@media (min-width: 768px) {
		min-height: auto;
	}
`;

export const WrapperBtns = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
	box-shadow: 0px 1px 6px 0px #3c3c3c33;
	padding: 16px;

	position: absolute;
	background-color: #fff;
	bottom: 0;
	width: 100%;

	@media (min-width: 768px) {
		position: relative;
		padding: 16px 24px 16px 24px;
	}
`;

export const WrapperHeader = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 16px;
	position: sticky;
	top: 0;
	background-color: #fff;

	@media (min-width: 768px) {
		padding: 24px;
	}
`;

export const WrapperContent = styled.div`
	display: grid;
	gap: 16px;
	padding: 0 16px 16px;
	max-height: calc(100vh - 150px);
	overflow-y: auto;
	overflow-x: hidden;

	@media (min-width: 768px) {
		max-height: calc(80vh - 200px);
		padding: 0 24px 16px;
	}
`;

export const WrapperInput = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 4px;
`;

export const InputStyle = styled.input`
	min-height: 40px;
	border-radius: 8px;
	border: 1px solid #bfbfbf;
	padding: 4px 8px;
	font-size: 14px;
`;
