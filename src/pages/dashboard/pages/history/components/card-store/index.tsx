import React from "react";
import * as s from "./styles";

import { RiDeleteBinLine } from "react-icons/ri";
import { Text } from "../../../../../../components/atomic/text";
import { useBoolean } from "../../../../../../hooks/useBoolean";
import { IOrder } from "../../../../../../types/order.type";

interface IProps {
	data: IOrder;
}

export const CardOrder: React.FC<IProps> = (props) => {
	const { data } = props;
	const confirm = useBoolean();

	// const { deleteStore } = useDeleteStore();
	const handleWhatsAppRedirect = () => {
		const phoneNumber = data?.user?.phone_number.replace(/\D/g, "");
		const whatsappLink = `https://wa.me/${phoneNumber}`;
		window.location.href = whatsappLink;
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
					gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 100px",
					padding: "8px 16px",
				}}
			>
				<Text text={data.order_date} type="text" />
				<Text text={data.status} type="text" />
				<div style={{ display: "flex", flexDirection: "column" }}>
					<Text text={data.user.user_name} type="text" />
					<Text
						onClick={handleWhatsAppRedirect}
						text={data.user.phone_number}
						type="text"
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
