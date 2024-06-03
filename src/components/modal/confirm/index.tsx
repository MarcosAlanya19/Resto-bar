import React from "react";
import * as s from "./styles";

import Modal from "react-modal";
import { Text } from "../../atomic/text";

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
	info: {
		title: string;
		subtitle: string;
		cancel?: string;
		confirm?: string;
	};
	onConfirm: () => void;
}

export const ModalConfirm: React.FC<IProps> = (props) => {
	return (
		<Modal
			isOpen={props.modal.active}
			onRequestClose={props.modal.on}
			style={customStyles}
			contentLabel="Example Modal"
		>
			<s.Container>
				<div style={{ display: "grid", justifyItems: "center" }}>
					<Text text={props.info.title} type="title" />
					<Text text={props.info.subtitle} type="text" />
				</div>
				<div style={{ display: "grid", gap: "8px" }}>
					<s.Button cancel onClick={props.onConfirm}>
						<Text
							text={props.info.confirm ?? "Confirmar"}
							type="text"
							weight="medium"
						/>
					</s.Button>
					<s.Button onClick={props.modal.off}>
						<Text
							text={props.info.cancel ?? "Cancelar"}
							type="text"
							weight="medium"
						/>
					</s.Button>
				</div>
			</s.Container>
		</Modal>
	);
};
