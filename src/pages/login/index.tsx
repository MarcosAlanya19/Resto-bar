import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Text } from "../../components/atomic/text";

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	background-color: #000;
	justify-content: center;
	align-items: center;
	width: 100%;
	color: #fff;
	padding: 64px;
`;

const Form = styled.form`
	position: relative;

	width: 100%;
	padding: 20px 0;
	display: grid;
	gap: 16px;
`;

const Input = styled.input`
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

const Button = styled.button`
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

const Login = () => {
	const navigate = useNavigate();

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "4fr 2fr",
				width: "100%",
				height: "100vh",
			}}
		>
			<img
				style={{
					width: "100%",
					objectFit: "cover",
					height: "100vh",
					objectPosition: "top",
				}}
				src="./public/img/login/img-login.jpg"
				alt="img-login"
			/>
			<Wrapper>
				<Text
					style={{ textTransform: "uppercase", fontSize: "32px" }}
					type="title"
					text="Iniciar Sesión"
				/>
				<Form>
					<Input type="email" name="email" placeholder="example@gmail.com" />
					<Input type="password" name="password" placeholder="********" />
				</Form>
				<Button style={{width: "100%"}} onClick={() => navigate("/dashboard")}>Entrar</Button>
			</Wrapper>
		</div>
	);
};

export default Login;
