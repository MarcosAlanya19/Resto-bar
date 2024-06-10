import React from "react";
import * as s from "./styles";

import { RiDeleteBinLine } from "react-icons/ri";
import { Text } from "../../../../../../components/atomic/text";
import { useBoolean } from "../../../../../../hooks/useBoolean";
import { IOrder, IOrderStatus } from "../../../../../../types/order.type";
import dayjs from "dayjs";

interface IProps {
	data: IOrder;
}

export const CardOrder: React.FC<IProps> = (props) => {
	const { data } = props;
	const confirm = useBoolean();

	// const { deleteStore } = useDeleteStore();
	const handleWhatsAppRedirect = () => {
		const phoneNumber = data?.user?.phone_number.replace(/\D/g, "");
		const whatsappLink = `https://wa.me/+51${phoneNumber}`;
		window.location.href = whatsappLink;
	};

	const orderStatusTranslations = {
		[IOrderStatus.pending]: "Pendiente",
		[IOrderStatus.process]: "En proceso",
		[IOrderStatus.delivered]: "Entregado",
		[IOrderStatus.canceled]: "Cancelado",
		[IOrderStatus.rejected]: "Rechazado",
	};

	return (
		<>
			<div
				style={{
					borderRadius: "8px",
					overflow: "hidden",
					boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
					backgroundColor: "#fff",
					display: "grid",
					alignItems: "center",
					gap: "16px",
					gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 100px",
					padding: "8px 16px",
				}}
			>
				<Text text={dayjs(data.order_date).format('DD/MM/YYYY HH:mm')} type="text" />
				<Text text={orderStatusTranslations[data.status]} type="text" />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Text text={data.user.user_name} type="text" />
					<Text text={data.user.address} type="text" />
					<Text
						onClick={handleWhatsAppRedirect}
						text={data.user.phone_number}
						type="text"
					/>
				</div>
				<Text text={data.store.store_name ?? "Sin local"} type="text" />
				<div>
					{data.items.map((item) => (
						<Text text={`${item.item_name}`} type="text" />
					))}
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
				</div>
			</div>

			{/* <ModalConfirm
				info={{
					title: "¿Estás seguro que deseas eliminar esta sucursal?",
					subtitle: "Esta acción no se puede deshacer",
					confirm: "Si, eliminar",
					cancel: "No, cancelar",
				}}
				onConfirm={async () => {
					// await deleteStore(data.id);
					toast.success("Se elimino sucursal con éxito");
					props.refresh();
				}}
				modal={confirm}
				refresh={props.refresh}
			/> */}
		</>
	);
};
