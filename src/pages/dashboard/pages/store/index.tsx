import { FC } from "react";
import * as s from "../../styles";

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

export const StoreDashboard: FC = () => {
	const { active: showModal, off: offModal, on: onModal } = useBoolean();

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
						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								gap: "4px",
							}}
						>
							<Text text="Nombre del producto" type="text" />
							<input
								type="text"
								name=""
								id=""
								placeholder="Ingresa nombre de la hamburguesa"
								style={{
									minHeight: "40px",
									borderRadius: "8px",
									border: "1px solid #bfbfbf",
									padding: "4px 8px",
									fontSize: "14px",
								}}
							/>
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								gap: "4px",
							}}
						>
							<Text text="Descripción del producto" type="text" />
							<textarea
								name=""
								id=""
								placeholder="Ingresa descripción de la hamburguesa"
								style={{
									minHeight: "40px",
									borderRadius: "8px",
									border: "1px solid #bfbfbf",
									padding: "4px 8px",
									fontSize: "14px",
									resize: "none",
								}}
							/>
						</div>

						<div
							style={{
								display: "flex",
								flexDirection: "column",
								width: "100%",
								gap: "4px",
							}}
						>
							<Text text="Costo del producto" type="text" />
							<input
								type="text"
								name=""
								id=""
								placeholder="Ingresa costo de la hamburguesa"
								style={{
									minHeight: "40px",
									borderRadius: "8px",
									border: "1px solid #bfbfbf",
									padding: "4px 8px",
									fontSize: "14px",
								}}
							/>
						</div>
					</s.WrapperContent>
					<s.WrapperBtns>
						<s.Button onClick={offModal}>
							<Text text="Cancelar" type="text" />
						</s.Button>
						<s.Button>
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
