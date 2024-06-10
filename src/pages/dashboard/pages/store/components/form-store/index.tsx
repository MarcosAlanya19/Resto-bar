import React from "react";
import * as s from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { Text } from "../../../../../../components/atomic/text";
import { usePetitionStore } from "../../../../../../hooks/store/usePostStore";
import { IFormInput } from "../../../../types";
import { toast } from "react-toastify";
import { IStore } from "../../../../../../types/store.type";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		border: "none",
		marginRight: "-50%",
		boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
		transform: "translate(-50%, -50%)",
		padding: "0",
		borderRadius: "16px",
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
};

interface IProps {
	modal: {
		on: () => void;
		off: () => void;
		toggle: () => void;
		set: React.Dispatch<React.SetStateAction<boolean>>;
		active: boolean;
	};
	refresh: () => void;
	update?: IStore;
	setUpdate?: React.Dispatch<React.SetStateAction<IStore>>;
}

export const ModalFormStore: React.FC<IProps> = (props) => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IFormInput>({
		defaultValues: {
			address: props.update?.id ? props.update.address : "",
			closing_hour: props.update?.id ? props.update.closing_hour : "",
			opening_hour: props.update?.id ? props.update.opening_hour : "",
			description: props.update?.id ? props.update.description : "",
			phone: props.update?.id ? props.update.phone : "",
			store_name: props.update?.id ? props.update.store_name : "",
		},
	});

	const { postStore, updateStore } = usePetitionStore();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		if (props.update) {
			await updateStore(props.update.id, data);
			toast.success("Actualización de sucursal con éxito");
		} else {
			await postStore(data);
			toast.success("Creación de sucursal con éxito");
		}
		props.refresh();
		props.modal.off();
		reset();
		if (props.setUpdate) {
			props.setUpdate({} as IStore);
		}
	};

	const [imagePreview, setImagePreview] = React.useState(
		props.update ? props.update.secure_url : ""
	);

	const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	return (
		<Modal
			isOpen={props.modal.active}
			onRequestClose={props.modal.on}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<s.Container>
				<s.WrapperHeader>
					<Text
						type="title"
						text={props.update ? "Edición de Sucursal" : "Nueva Sucursal"}
					/>
				</s.WrapperHeader>
				<s.WrapperContent>
					<s.WrapperInput>
						<Text text="Nombre de sucursal" type="text" />
						<div>
							<s.InputStyle
								id="store_name"
								type="text"
								{...register("store_name", {
									required: "Nombre de tienda obligatorio",
								})}
								placeholder="Ingresa nombre de la hamburguesa"
							/>
							{errors.store_name && (
								<Text
									text={errors.store_name.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Descripción" type="text" />
						<div>
							<s.InputStyle
								id="description"
								type="text"
								{...register("description", {
									required: "Descripción obligatoria",
								})}
								placeholder="Ingresa una descripción"
							/>
							{errors.description && (
								<Text
									text={errors.description.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Imagen de sucursal" type="text" />

						<s.InputStyle
							id="image"
							type="file"
							{...register("image")}
							placeholder="Ingresa nombre de la hamburguesa"
							onChange={handleImageChange}
						/>
						{imagePreview && (
							<img src={imagePreview} alt="Imagen de sucursal" width="100" />
						)}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Dirección" type="text" />
						<div>
							<s.InputStyle
								id="address"
								{...register("address", {
									required: "Correo obligatorio",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Dirección de correo electrónico no válida",
									},
								})}
								placeholder="Ingresa descripción de la hamburguesa"
							/>
							{errors.address && (
								<Text
									text={errors.address.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Telefono" type="text" />
						<div>
							<s.InputStyle
								type="phone"
								id="phone"
								{...register("phone", {
									required: "Teléfono obligatorio",
									pattern: {
										value: /^\d{0,9}$/,
										message:
											"El número de teléfono debe tener máximo 9 dígitos",
									},
								})}
								placeholder="Ingresa costo de la hamburguesa"
							/>
							{errors.phone && (
								<Text
									text={errors.phone.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Hora de apertura" type="text" />
						<div>
							<s.InputStyle
								type="time"
								id="opening_hour"
								{...register("opening_hour", {
									required: "La hora de apertura es obligatoria",
									pattern: {
										value: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
										message:
											"Formato de hora inválido. Utiliza el formato HH:MM",
									},
								})}
							/>
							{errors.opening_hour && (
								<Text
									text={errors.opening_hour.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Hora de cierre" type="text" />
						<div>
							<s.InputStyle
								type="time"
								id="closing_hour"
								{...register("closing_hour", {
									required: "La hora de cierre es obligatoria",
									pattern: {
										value: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
										message:
											"Formato de hora inválido. Utiliza el formato HH:MM",
									},
								})}
							/>
							{errors.closing_hour && (
								<Text
									text={errors.closing_hour.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>
				</s.WrapperContent>
				<s.WrapperBtns>
					<s.Button
						onClick={() => {
							props.modal.off();
							if (props.setUpdate) {
								props.setUpdate({} as IStore);
								reset();
							}
						}}
					>
						<Text text="Cancelar" type="text" />
					</s.Button>
					<s.Button onClick={handleSubmit(onSubmit)}>
						<Text
							text={props.update ? "Editar sucursal" : "Crear sucursal"}
							type="text"
						/>
					</s.Button>
				</s.WrapperBtns>
			</s.Container>
		</Modal>
	);
};
