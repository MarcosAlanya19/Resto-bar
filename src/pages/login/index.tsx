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
		<s.WrapperLogin>
			<s.ImgLogin src="./img/login/img-login.jpg" alt="img-login" />
			<s.Wrapper>
				{error && (
					<s.WrapperError>
						<Text type="text" text={error ?? ""} weight="medium" />
					</s.WrapperError>
				)}

				<Text
					style={{ textTransform: "uppercase", fontSize: "32px" }}
					type="title"
					text="Iniciar Sesión"
				/>
				<s.Form>
					<s.WrapperInput>
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
					</s.WrapperInput>

					<s.WrapperInput>
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
					</s.WrapperInput>
				</s.Form>
				<s.Button style={{ width: "100%" }} onClick={handleSubmit(onSubmit)}>
					Entrar
				</s.Button>
			</s.Wrapper>
		</s.WrapperLogin>
	);
};
