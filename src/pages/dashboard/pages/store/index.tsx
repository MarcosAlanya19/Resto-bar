/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";
import * as s from "../../styles";

import { SubmitHandler, useForm } from "react-hook-form";
import { RiAddLine } from "react-icons/ri";
import Modal from "react-modal";
import { Text } from "../../../../components/atomic/text";
import { useFetchStores } from "../../../../hooks/store/useFetchStore";
import { usePostStore } from "../../../../hooks/store/usePostStore";
import { useBoolean } from "../../../../hooks/useBoolean";
import { Header } from "../../components/header";
import { IFormInput } from "../../types";
import { CardProduct } from "./components/card-product";

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
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
};

export const StoreDashboard: FC = () => {
	const modalStore = useBoolean();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const { data: storeData, fetchStore } = useFetchStores();
	const { postStore } = usePostStore();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		await postStore(data);
		fetchStore();

		modalStore.off();
	};

	return (
		<>
			<s.ContainerLeft>
				<Header
					title="Sucursales"
					subtitle="Crea y configura las sucursales de la marca"
					actions={
						<s.Button onClick={modalStore.on}>
							<Text
								text="Agregar"
								type="text"
								leftIcon={<RiAddLine size={14} />}
								weight="medium"
								style={{
									color: "#fff",
									display: "flex",
									justifyContent: "center",
								}}
							/>
						</s.Button>
					}
				/>
				<s.Body>
					<input
						type="text"
						placeholder="O  Buscar por nombre de hamburguesa"
						style={{
							width: "50%",
							marginBottom: "24px",
							border: "1px solid #bfbfbf",
							minHeight: "40px",
							padding: "4px 8px",
							fontSize: "14px",
							borderRadius: "8px",
						}}
					/>

					<div
						style={{
							borderRadius: "8px",
							overflow: "hidden",
							backgroundColor: "#edf3fc",
							display: "grid",
							gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 100px",
							marginBottom: "4px",
							padding: "8px 16px",
						}}
					>
						<Text weight="medium" text={"Nombre"} type="text" />
						<Text weight="medium" text={"Apertura"} type="text" />
						<Text weight="medium" text={"Cierre"} type="text" />
						<Text weight="medium" text={"Dirección"} type="text" />
						<Text weight="medium" text={"Imagen"} type="text" />
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
						}}
					>
						{storeData?.map((store) => (
							<CardProduct data={store} />
						))}
					</div>
				</s.Body>
			</s.ContainerLeft>
			<Modal
				isOpen={modalStore.active}
				onRequestClose={modalStore.on}
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
						<s.Button onClick={modalStore.off}>
							<Text text="Cancelar" type="text" />
						</s.Button>
						<s.Button onClick={handleSubmit(onSubmit)}>
							<Text text="Crear hamburguesa" type="text" />
						</s.Button>
					</s.WrapperBtns>
				</s.Container>
			</Modal>
		</>
	);
};
