import styled, { keyframes } from "styled-components";

export const WrapperLogin = styled.div`
	display: grid;
	grid-template-columns: 4fr 2fr;
	width: 100%;
	height: 100vh;
`;

export const ImgLogin = styled.img`
	width: 100%;
	object-fit: cover;
	height: 100vh;
	object-position: top;
`;

export const WrapperError = styled.div`
	background: #f03c20;
	width: 100%;
	border-radius: 4px;
	padding: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 16px;
`;

export const WrapperInput = styled.div`
	width: 100%;
	display: grid;
	gap: 4px;
`;

export const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

export const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #000;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: #fff;
	padding: 64px;
`;

export const Form = styled.form`
	position: relative;

	width: 100%;
	padding: 20px 0;
	display: grid;
	gap: 16px;
`;

export const Input = styled.input`
	width: 100%;
	padding: 11px 13px;
	background: #f9f9fa;
	border-radius: 4px;
	outline: 0;
	border: 1px solid rgba(245, 245, 245, 0.7);
	font-size: 14px;
	transition: all 0.3s ease-out;
	box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
	:focus,
	:hover {
		box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
	}
`;

export const Button = styled.button`
	padding: 11px 13px;
	color: rgb(253, 249, 243);
	font-weight: 600;
	text-transform: uppercase;
	background: #f03d4e;
	border: none;
	border-radius: 3px;
	outline: 0;
	cursor: pointer;
	margin-top: 0.6rem;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease-out;
	:hover {
		background: rgb(200, 50, 70);
		animation: ${jump} 0.2s ease-out forwards;
	}
`;
