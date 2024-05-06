import * as s from "./styles";

import { RiAddLine } from "react-icons/ri";
import Modal from "react-modal";
import { Text } from "../../components/atomic/text";
import { useBoolean } from "../../hooks/useBoolean";
import { AsideModal } from "./components/aside";
import { Header } from "./components/header";

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
		padding: "0"
	},
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.5)",
	},
};

const Dashboard = () => {
	const { active: showModal, off: offModal, on: onModal } = useBoolean();

	return (
		<>
			<s.WrapperDashboard>
				<AsideModal title="hola" />

				<s.ContainerLeft>
					<Header
						title="Hamburguesas"
						subtitle="Crea y configura las hamburguesas del local"
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
					<s.Body>sada</s.Body>
				</s.ContainerLeft>
				<Modal
					isOpen={showModal}
					onRequestClose={offModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<s.Container>
						<s.WrapperHeader>
							<Text
								type="title"
								text="Nuevo hamburguesa"
							/>
						</s.WrapperHeader>
						<s.WrapperContent>
							<div style={{display: "flex", flexDirection: "column", width: "100%", gap: "4px"}}>
								<Text text="Nombre del producto" type="text" />
								<input type="text" name="" id="" placeholder="Ingresa nombre de la hamburguesa" style={{minHeight: "40px", borderRadius: "8px", border: "1px solid #bfbfbf", padding: "4px 8px", fontSize: "14px"}} />
							</div>

							<div style={{display: "flex", flexDirection: "column", width: "100%", gap: "4px"}}>
								<Text text="Descripción del producto" type="text" />
								<textarea name="" id="" placeholder="Ingresa descripción de la hamburguesa" style={{minHeight: "40px", borderRadius: "8px", border: "1px solid #bfbfbf", padding: "4px 8px", fontSize: "14px", resize: "none"}} />
							</div>

							<div style={{display: "flex", flexDirection: "column", width: "100%", gap: "4px"}}>
								<Text text="Costo del producto" type="text" />
								<input type="text" name="" id="" placeholder="Ingresa costo de la hamburguesa" style={{minHeight: "40px", borderRadius: "8px", border: "1px solid #bfbfbf", padding: "4px 8px", fontSize: "14px"}} />
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
			</s.WrapperDashboard>
		</>
	);
};

export default Dashboard;
