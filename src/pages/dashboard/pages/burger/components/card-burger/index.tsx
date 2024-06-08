import React from "react";
import * as s from "./styles";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Text } from "../../../../../../components/atomic/text";
import { ModalConfirm } from "../../../../../../components/modal/confirm";
import { useDeleteBurger } from "../../../../../../hooks/burger/useDeleteBurger";
import { useBoolean } from "../../../../../../hooks/useBoolean";
import { IBurger } from "../../../../../../types/burger.type";
import { ModalFormStore } from "../form-burger";

interface IProps {
	data: IBurger;
	refresh: () => void;
}

export const CardBurger: React.FC<IProps> = (props) => {
	const { data } = props;
	const confirm = useBoolean();
	const editStore = useBoolean();
	const [update, setUpdate] = React.useState<IBurger>(data);

	const { deleteBurger } = useDeleteBurger();

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
				<Text text={data.item_name} type="text" />
				<Text text={data.description} type="text" />
				<Text text={data.price} type="text" />
				<div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
					{data.stores.map((store) => (
						<div
							key={store.id}
							style={{
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#bfbfbf70",
								borderRadius: "8px",
								textTransform: "uppercase",
								maxWidth: "120px",
							}}
						>
							<Text text={store.name} type="text" weight="medium" />
						</div>
					))}
				</div>
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
					await deleteBurger(data.id);
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
