import * as s from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/atomic/text";
import { routes } from "../../config/router/routes";
import { useLoginUser } from "../../hooks/login/useLoginUser";
import { usePostUser } from "../../hooks/login/usePostUser";
import { useBoolean } from "../../hooks/useBoolean";
import { ILogin } from "../../types/user.type";
import { toast } from "react-toastify";

export const Login = () => {
	const navigate = useNavigate();
	const login = useBoolean();

	const {
		formState: { errors },
		register,
		handleSubmit,
		reset
	} = useForm<ILogin>({
		defaultValues: {
			email: "",
			user_password: "",
			phone_number: "",
			address: "",
			user_name: "",
		},
	});

	const { loginUser, error } = useLoginUser();
	const { postBurger } = usePostUser();

	const onSubmit: SubmitHandler<ILogin> = async (data) => {
		const payload = {
			email: data.email,
			user_password: data.user_password,
			phone_number: data.phone_number,
			address: data.address,
			user_name: data.user_name,
		};

		if (!login.active) {
			await loginUser(data);
		} else {
			await postBurger(payload);
			toast.success("Se creo usuario correctamente");
			login.toggle();
			reset()
		}
	};

	return (
		<s.WrapperLogin>
			<s.ImgLogin src="./img/login/img-login.jpg" alt="img-login" />
			<s.Wrapper>
				<Text
					onClick={() => {
						navigate(routes.index);
					}}
					leftIcon={<IoArrowBackOutline size={20} />}
					style={{
						cursor: "pointer",
						top: "0",
						position: "absolute",
						right: "0",
						padding: "24px 60px",
						alignItems: "center",
					}}
					text="REGRESAR"
					type="textDefault"
					weight="medium"
				/>

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
					{!login.active ? (
						<>
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
						</>
					) : (
						<>
							<s.WrapperInput>
								<s.Input
									id="user_name"
									{...register("user_name", {
										required: "Ingresa nombre de usuario",
									})}
									type="text"
									name="user_name"
									placeholder="Ingresa nombre de usuario"
								/>
								{errors.user_name && (
									<Text
										text={errors.user_name.message ?? ""}
										type="smallText"
									/>
								)}
							</s.WrapperInput>

							<s.WrapperInput>
								<s.Input
									id="address"
									{...register("address", {
										required: "La dirección es obligatoria",
									})}
									type="text"
									name="address"
									placeholder="Ingresa dirección"
								/>
								{errors.address && (
									<Text text={errors.address.message ?? ""} type="smallText" />
								)}
							</s.WrapperInput>

							<s.WrapperInput>
								<s.Input
									id="phone_number"
									{...register("phone_number", {
										required: "Movil obligatorio",
									})}
									type="number"
									name="phone_number"
									placeholder="Ingresa movil"
								/>
								{errors.phone_number && (
									<Text
										text={errors.phone_number.message ?? ""}
										type="smallText"
									/>
								)}
							</s.WrapperInput>

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
									placeholder="Ingresa contraseña"
								/>
								{errors.user_password && (
									<Text
										text={errors.user_password.message ?? ""}
										type="smallText"
									/>
								)}
							</s.WrapperInput>
						</>
					)}
				</s.Form>
				<s.Button style={{ width: "100%" }} onClick={handleSubmit(onSubmit)}>
					{!login.active ? "Entrar" : "Registrar"}
				</s.Button>

				<div
					style={{
						display: "flex",
						justifyContent: "end",
						width: "100%",
						padding: "16px 0",
					}}
				>
					<Text
						style={{ cursor: "pointer" }}
						onClick={login.toggle}
						text="¿No tienes cuenta? Registrate"
						type="smallText"
					/>
				</div>
			</s.Wrapper>
		</s.WrapperLogin>
	);
};
