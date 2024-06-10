import React from "react";
import * as s from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { Text } from "../../../../../../components/atomic/text";
import { usePetitionBurger } from "../../../../../../hooks/burger/usePostBurger";
import { useFetchStores } from "../../../../../../hooks/store/useFetchStore";
import {
	IItem,
	IPostItem,
	MenuItemType,
} from "../../../../../../types/burger.type";

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
	update?: IItem;
	setUpdate?: React.Dispatch<React.SetStateAction<IItem>>;
}

export const ModalFormItem: React.FC<IProps> = (props) => {
	const storeIds = props.update?.stores.map((store) => store.id.toString());
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<IPostItem>({
		defaultValues: {
			item_name: props.update?.id ? props.update.item_name : "",
			description: props.update?.id ? props.update.description : "",
			price: props.update?.id ? props.update.price : "",
			store_ids: props.update?.id ? storeIds : [],
			type: props.update?.id ? props.update.type : MenuItemType.Beverage,
		},
	});

	const { postBurger, updateBurger } = usePetitionBurger();

	const onSubmit: SubmitHandler<IPostItem> = async (data) => {
		if (props.update) {
			await updateBurger(props.update.id, data);
			toast.success("Actualización de sucursal con éxito");
		} else {
			console.log({ data });
			await postBurger(data);
			toast.success("Creación de sucursal con éxito");
		}
		props.refresh();
		props.modal.off();
		reset();

		if (props.setUpdate) {
			props.setUpdate({} as IItem);
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

	const { data: storesData } = useFetchStores();

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
						text={props.update ? "Edición de producto" : "Nueva producto"}
					/>
				</s.WrapperHeader>
				<s.WrapperContent>
					<s.WrapperInput>
						<Text text="Nombre del producto" type="text" />
						<div>
							<s.InputStyle
								id="store_name"
								type="text"
								{...register("item_name", {
									required: "El nombre del producto es obligatorio",
								})}
								placeholder="Ingresa nombre del producto"
							/>
							{errors.item_name && (
								<Text
									text={errors.item_name.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Tipo de elemento" type="text" />
						<div>
							<s.SelectStyle
								{...register("type", {
									required: "El tipo del producto es obligatorio",
								})}
							>
								<option value={MenuItemType.Beverage}>Bebida</option>
								<option value={MenuItemType.Burger}>Hamburguesa</option>
								<option value={MenuItemType.Other}>Otro</option>
							</s.SelectStyle>
							{errors.type && (
								<Text
									text={errors.type.message ?? ""}
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
								{...register("description", {
									required: "La descripción es obligatoria",
								})}
								placeholder="Ingresa descripción de la hamburguesa"
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
						<Text text="Imagen de hamburguesa" type="text" />

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
						<Text text="Precio" type="text" />
						<div>
							<s.InputStyle
								type="number"
								id="price"
								{...register("price", { required: "El precio es obligario" })}
								placeholder="Ingresa costo de la hamburguesa"
							/>

							{errors.price && (
								<Text
									text={errors.price.message ?? ""}
									type="smallText"
									style={{ color: "#F14A41" }}
									weight="medium"
								/>
							)}
						</div>
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Seleccione local" type="text" />
						<div
							style={{
								display: "grid",
								gridTemplateColumns: "1fr 1fr",
								gap: "8px",
							}}
						>
							{storesData.map((store) => (
								<div key={store.id}>
									<label style={{ display: "flex", gap: "4px" }}>
										<input
											type="checkbox"
											value={store.id}
											{...register("store_ids", {
												required: "Selecciona al menos un local",
											})}
										/>
										<Text text={store.store_name} type="text" />
									</label>
								</div>
							))}
							{errors.store_ids && (
								<Text
									text={errors.store_ids.message ?? ""}
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
							if (props.setUpdate) {
								props.setUpdate({} as IItem);
							}
							props.modal.off();
							reset();
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
