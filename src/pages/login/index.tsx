import * as s from "./styles";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/atomic/text";

const Login = () => {
	const navigate = useNavigate();

	const {
		formState: { errors },
		register,
	} = useForm({
		defaultValues: {
			email: "",
			user_password: "",
		},
	});

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
				src="./img/login/img-login.jpg"
				alt="img-login"
			/>
			<s.Wrapper>
				<Text
					style={{ textTransform: "uppercase", fontSize: "32px" }}
					type="title"
					text="Iniciar Sesión"
				/>
				<s.Form>
					<s.Input
						id="email"
						{...register("email", { required: "Eamil is required" })}
						type="email"
						name="email"
						placeholder="example@gmail.com"
					/>
					{errors.email && <p>{errors.email.message}</p>}

					<s.Input
						id="user_password"
						{...register("user_password", {
							required: "user_password is required",
						})}
						type="text"
						name="user_password"
						placeholder="********"
					/>
					{errors.user_password && <p>{errors.user_password.message}</p>}
				</s.Form>
				<s.Button
					style={{ width: "100%" }}
					onClick={() => navigate("/dashboard/store")}
				>
					Entrar
				</s.Button>
			</s.Wrapper>
		</div>
	);
};

export default Login;
