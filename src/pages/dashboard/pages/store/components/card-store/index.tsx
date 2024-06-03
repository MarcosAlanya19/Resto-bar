import React from "react";
import * as s from "./styles";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { Text } from "../../../../../../components/atomic/text";
import { Store } from "../../../../../../types/store.type";
import { useDeleteStore } from "../../../../../../hooks/store/useDeleteStore";
import { useBoolean } from "../../../../../../hooks/useBoolean";
import { ModalConfirm } from "../../../../../../components/modal/confirm";
import { toast } from "react-toastify";

interface IProps {
	data: Store;
	refresh: () => void;
}

export const CardStore: React.FC<IProps> = (props) => {
	const { data } = props;
	const confirm = useBoolean();

	const { deleteStore } = useDeleteStore();

	return (
		<>
			<div
				style={{
					borderRadius: "8px",
					overflow: "hidden",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					backgroundColor: "#fff",
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 100px",
					padding: "8px 16px",
				}}
			>
				<Text text={data.store_name} type="text" />
				<Text text={data.opening_hour} type="text" />
				<Text text={data.closing_hour} type="text" />
				<Text text={data.address} type="text" />
				<div style={{ width: 50, height: 50, overflow: "hidden" }}>
					<img
						src={data.secure_url}
						alt="img-store"
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</div>
				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gap: "8px",
					}}
				>
					<s.WrapperIcon alert onClick={confirm.on}>
						<RiDeleteBinLine size={16} />
					</s.WrapperIcon>
					<s.WrapperIcon alert={false}>
						<PiPencilSimpleLineDuotone size={16} />
					</s.WrapperIcon>
				</div>
			</div>

			<ModalConfirm
				info={{
					title: "¿Estás seguro que deseas eliminar esta sucursal?",
					subtitle: "Esta acción no se puede deshacer",
					confirm: "Si, eliminar",
					cancel: "No, cancelar",
				}}
				onConfirm={async () => {
					await deleteStore(data.id);
					toast.success("Se elimino sucursal con éxito")
					props.refresh();
				}}
				modal={confirm}
				refresh={props.refresh}
			/>
		</>
	);
};
