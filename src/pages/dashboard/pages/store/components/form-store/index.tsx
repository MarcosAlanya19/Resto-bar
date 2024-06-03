import React from "react";
import * as s from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { Text } from "../../../../../../components/atomic/text";
import { usePostStore } from "../../../../../../hooks/store/usePostStore";
import { IFormInput } from "../../../../types";
import { toast } from "react-toastify";

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
	modalStore: {
		on: () => void;
		off: () => void;
		toggle: () => void;
		set: React.Dispatch<React.SetStateAction<boolean>>;
		active: boolean;
	};
	refresh: () => void;
}

export const FormStore: React.FC<IProps> = (props) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const { postStore } = usePostStore();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		await postStore(data);
		props.modalStore.off();
		toast.success("Creación de sucursal con éxito");
		props.refresh();
	};

	return (
		<Modal
			isOpen={props.modalStore.active}
			onRequestClose={props.modalStore.on}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<s.Container>
				<s.WrapperHeader>
					<Text type="title" text="Nuevo hamburguesa" />
				</s.WrapperHeader>
				<s.WrapperContent>
					<s.WrapperInput>
						<Text text="Nombre de sucursal" type="text" />
						<s.InputStyle
							id="store_name"
							type="text"
							{...register("store_name", {
								required: "Store name is required",
							})}
							placeholder="Ingresa nombre de la hamburguesa"
						/>
						{errors.store_name && <p>{errors.store_name.message}</p>}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Imagen de sucursal" type="text" />
						<s.InputStyle
							id="image"
							type="file"
							{...register("image", { required: "Store image is required" })}
							placeholder="Ingresa nombre de la hamburguesa"
						/>
						{errors.image && <p>{errors.image.message}</p>}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Dirección" type="text" />
						<s.InputStyle
							id="address"
							{...register("address", { required: "Address is required" })}
							placeholder="Ingresa descripción de la hamburguesa"
						/>
						{errors.address && <p>{errors.address.message}</p>}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Telefono" type="text" />
						<s.InputStyle
							type="phone"
							id="phone"
							{...register("phone", { required: "Phone is required" })}
							placeholder="Ingresa costo de la hamburguesa"
						/>
						{errors.phone && <p>{errors.phone.message}</p>}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Hora de apertura" type="text" />
						<s.InputStyle
							type="time"
							id="opening_hour"
							{...register("opening_hour", {
								required: "Opening hour is required",
							})}
							placeholder="Ingresa costo de la hamburguesa"
						/>
						{errors.opening_hour && <p>{errors.opening_hour.message}</p>}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Hora de cierre" type="text" />
						<s.InputStyle
							type="time"
							id="closing_hour"
							{...register("closing_hour", {
								required: "Closing hour is required",
							})}
							placeholder="Ingresa costo de la hamburguesa"
						/>
						{errors.closing_hour && <p>{errors.closing_hour.message}</p>}
					</s.WrapperInput>
				</s.WrapperContent>
				<s.WrapperBtns>
					<s.Button onClick={props.modalStore.off}>
						<Text text="Cancelar" type="text" />
					</s.Button>
					<s.Button onClick={handleSubmit(onSubmit)}>
						<Text text="Crear hamburguesa" type="text" />
					</s.Button>
				</s.WrapperBtns>
			</s.Container>
		</Modal>
	);
};
