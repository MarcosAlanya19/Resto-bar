import React from "react";
import * as s from "./styles";

import { SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { toast } from "react-toastify";
import { Text } from "../../../../../../components/atomic/text";
import { usePetitionBurger } from "../../../../../../hooks/burger/usePostBurger";
import { useFetchStores } from "../../../../../../hooks/store/useFetchStore";
import { IBurger, IPostBurger } from "../../../../../../types/burger.type";

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
	update?: IBurger;
}

export const ModalFormStore: React.FC<IProps> = (props) => {
	const storeIds = props.update?.stores.map(store => store.id.toString());
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IPostBurger>({
		defaultValues: {
			burger_name: props.update?.id ? props.update.burger_name : "",
			description: props.update?.id ? props.update.description : "",
			price: props.update?.id ? props.update.price : "",
			store_ids: props.update?.id ? storeIds :   [],
		},
	});

	const { postBurger, updateBurger } = usePetitionBurger();

	const onSubmit: SubmitHandler<IPostBurger> = async (data) => {
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
						text={props.update ? "Edición de Hamburguesa" : "Nueva Hamburguesa"}
					/>
				</s.WrapperHeader>
				<s.WrapperContent>
					<s.WrapperInput>
						<Text text="Nombre de hamburguesa" type="text" />
						<s.InputStyle
							id="store_name"
							type="text"
							{...register("burger_name")}
							placeholder="Ingresa nombre de la hamburguesa"
						/>
						{errors.burger_name && <p>{errors.burger_name.message}</p>}
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
						{errors.image && <p>{errors.image.message}</p>}
						{imagePreview && (
							<img src={imagePreview} alt="Imagen de sucursal" width="100" />
						)}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Descripción" type="text" />
						<s.InputStyle
							id="description"
							{...register("description", { required: "Address is required" })}
							placeholder="Ingresa descripción de la hamburguesa"
						/>
						{errors.description && <p>{errors.description.message}</p>}
					</s.WrapperInput>

					<s.WrapperInput>
						<Text text="Precio" type="text" />
						<s.InputStyle
							type="number"
							id="price"
							{...register("price")}
							placeholder="Ingresa costo de la hamburguesa"
						/>
						{errors.price && <p>{errors.price.message}</p>}
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
											{...register("store_ids")}
										/>
										<Text text={store.store_name} type="text" />
									</label>
								</div>
							))}
							{errors.store_ids && <p>{errors.store_ids.message}</p>}
						</div>
					</s.WrapperInput>
				</s.WrapperContent>
				<s.WrapperBtns>
					<s.Button onClick={props.modal.off}>
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
