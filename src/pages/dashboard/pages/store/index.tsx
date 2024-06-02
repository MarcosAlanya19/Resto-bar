import { FC } from "react";
import * as s from "../../styles";

import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { RiAddLine, RiDeleteBinLine } from "react-icons/ri";
import Modal from "react-modal";
import { Text } from "../../../../components/atomic/text";
import { useBoolean } from "../../../../hooks/useBoolean";
import { Header } from "../../components/header";

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

interface IFormInput {
	store_name: string;
	address: string;
	phone: string;
	opening_hour: string;
	closing_hour: string;
	image: FileList;
}

export const StoreDashboard: FC = () => {
	const { active: showModal, off: offModal, on: onModal } = useBoolean();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = async (data) => {
		try {
			const storeData = {
				store_name: data.store_name,
				address: data.address,
				phone: data.phone,
				opening_hour: data.opening_hour,
				closing_hour: data.closing_hour,
				image_url: data.image[0],
			};

			const response = await axios.post("/api/stores", storeData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			if (response.status === 201) {
				alert("Store created successfully");
			} else {
				alert("Error creating store");
			}
		} catch (error) {
			alert("Error creating store");
		}
	};

	return (
		<>
			<s.ContainerLeft>
				<Header
					title="Sucursales"
					subtitle="Crea y configura las sucursales de la marca"
					actions={
						<s.Button onClick={onModal}>
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
							display: "grid",
							gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
							gap: "16px",
						}}
					>
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
						<CardProduct />
					</div>
				</s.Body>
			</s.ContainerLeft>
			<Modal
				isOpen={showModal}
				onRequestClose={offModal}
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
						<s.Button onClick={offModal}>
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

function CardProduct() {
	return (
		<div
			style={{
				borderRadius: "16px",
				overflow: "hidden",
				boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
				backgroundColor: "#fff",
			}}
		>
			<div style={{ position: "relative" }}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "40px",
						minWidth: "80px",
						position: "absolute",
						borderRadius: "16PX",
						background: "#F14A41",
						bottom: "20px",
						color: "#fff",
						right: "20px",
					}}
				>
					<Text text="S/. 8.00" type="textDefault" weight="bold" />
				</div>

				<img
					src="https://res.cloudinary.com/dltl0daa4/image/upload/v1714973455/restobar-tostado/a_lo_pobre_l3cikz.jpg"
					alt="img-prod"
					height={300}
					style={{
						objectFit: "cover",
						width: "100%",
						objectPosition: "center",
					}}
				/>
			</div>
			<div
				style={{
					padding: "4px 16px 12px",
					display: "grid",
					gridTemplateColumns: "3fr 2fr",
					alignItems: "center",
					justifyItems: "center",
				}}
			>
				<div>
					<Text
						text="Hamburguesa a lo pobre"
						type="textDefault"
						weight="bold"
					/>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "8px",
					}}
				>
					<s.WrapperIcon alert>
						<RiDeleteBinLine size={20} />
					</s.WrapperIcon>
					<s.WrapperIcon alert={false}>
						<PiPencilSimpleLineDuotone size={20} />
					</s.WrapperIcon>
				</div>
			</div>
		</div>
	);
}
