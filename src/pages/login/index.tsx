import * as s from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { Text } from "../../components/atomic/text";
import { useLoginUser } from "../../hooks/login/useLoginUser";
import { ILogin } from "../../types/user.type";

export const Login = () => {
	const {
		formState: { errors },
		register,
		handleSubmit,
	} = useForm<ILogin>({
		defaultValues: {
			email: "",
			user_password: "",
		},
	});

	const { loginUser, error } = useLoginUser();

	const onSubmit: SubmitHandler<ILogin> = async (data) => {
		await loginUser(data);
	};

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
				{error && (
					<div
						style={{
							background: "#f03c20",
							width: "100%",
							borderRadius: "4px",
							padding: "8px",
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "16px",
						}}
					>
						<Text type="text" text={error ?? ""} weight="medium" />
					</div>
				)}

				<Text
					style={{ textTransform: "uppercase", fontSize: "32px" }}
					type="title"
					text="Iniciar Sesión"
				/>
				<s.Form>
					<div style={{ width: "100%", display: "grid", gap: "4px" }}>
						<s.Input
							id="email"
							{...register("email", {
								required: "Correo es obligatrio",
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: "Dirección de correo electrónico no válida",
								},
							})}
							type="email"
							name="email"
							placeholder="correo@gmail.com"
						/>
						{errors.email && (
							<Text text={errors.email.message ?? ""} type="smallText" />
						)}
					</div>

					<div style={{ width: "100%", display: "grid", gap: "4px" }}>
						<s.Input
							id="user_password"
							{...register("user_password", {
								required: "Contraseña es obligatoria",
							})}
							type="password"
							name="user_password"
							placeholder="********"
						/>
						{errors.user_password && (
							<Text
								text={errors.user_password.message ?? ""}
								type="smallText"
							/>
						)}
					</div>
				</s.Form>
				<s.Button style={{ width: "100%" }} onClick={handleSubmit(onSubmit)}>
					Entrar
				</s.Button>
			</s.Wrapper>
		</div>
	);
};
