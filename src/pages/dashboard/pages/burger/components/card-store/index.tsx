import React from "react";
import * as s from "./styles";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Text } from "../../../../../../components/atomic/text";
import { ModalConfirm } from "../../../../../../components/modal/confirm";
import { useDeleteStore } from "../../../../../../hooks/store/useDeleteStore";
import { useBoolean } from "../../../../../../hooks/useBoolean";
import { IBurger } from "../../../../../../types/burger.type";
import { ModalFormStore } from "../form-store";

interface IProps {
	data: IBurger;
	refresh: () => void;
}

export const CardBurger: React.FC<IProps> = (props) => {
	const { data } = props;
	const confirm = useBoolean();
	const editStore = useBoolean();
	const [update, setUpdate] = React.useState<IBurger>(data);

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
				<Text text={data.burger_name} type="text" />
				<Text text={data.description} type="text" />
				<Text text={data.price} type="text" />
				<Text text={data.store_id} type="text" />
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
					<s.WrapperIcon
						alert={false}
						onClick={async () => {
							setUpdate(data);
							editStore.on();
						}}
					>
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
					toast.success("Se elimino sucursal con éxito");
					props.refresh();
				}}
				modal={confirm}
				refresh={props.refresh}
			/>

			<ModalFormStore
				update={update}
				modal={editStore}
				refresh={props.refresh}
			/>
		</>
	);
};