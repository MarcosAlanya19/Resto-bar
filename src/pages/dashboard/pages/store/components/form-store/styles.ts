import styled from "styled-components";

export const Container = styled.div`
	min-height: 100vh;
	position: relative;

	@media (min-width: 768px) {
		min-height: auto;
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
	width: 100%;
	min-height: 40px;
	border-radius: 8px;
	border: 1px solid #bfbfbf;
	padding: 4px 8px;
	font-size: 14px;
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

export const FileInputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	cursor: pointer;
	border-radius: 8px;
	border: 1px solid #bfbfbf;
	padding: 8px 16px;
	background-color: #fff;
	font-size: 14px;
	color: #333;
	min-height: 40px;

	&:hover {
		background-color: #f0f0f0;
	}
`;

export const HiddenFileInput = styled.input`
	display: none;
`;

export const UploadButton = styled.span`
	display: inline-block;
	margin-right: 8px;
	background-color: #4318ff;
	color: white;
	padding: 8px 12px;
	border-radius: 4px;
	cursor: pointer;

	&:hover {
		background-color: #0056b3;
	}
`;
