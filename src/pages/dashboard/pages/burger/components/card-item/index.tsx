import React from "react";
import * as s from "./styles";

import { PiPencilSimpleLineDuotone } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from "react-toastify";
import { Text } from "../../../../../../components/atomic/text";
import { ModalConfirm } from "../../../../../../components/modal/confirm";
import { useDeleteItem } from "../../../../../../hooks/burger/useDeleteBurger";
import { useBoolean } from "../../../../../../hooks/useBoolean";
import { IItem } from "../../../../../../types/burger.type";
import { ModalFormItem } from "../form-item";

interface IProps {
	data: IItem;
	refresh: () => void;
}

export const CardItem: React.FC<IProps> = (props) => {
	const { data } = props;
	const confirm = useBoolean();
	const editStore = useBoolean();
	const [update, setUpdate] = React.useState<IItem>(data);

	const { deleteItem } = useDeleteItem();

	return (
		<>
			<s.Wrapper>
				<Text text={data.item_name} type="text" />
				<Text text={data.type} type="text" />
				<Text text={data.description} type="text" />
				<Text text={`S/ ${data.price}`} type="text" />
				<s.WrapperBadge>
					{data.stores.map((store) => (
						<s.BadgeStore key={store.id}>
							<Text text={store.name} type="text" weight="medium" />
						</s.BadgeStore>
					))}
				</s.WrapperBadge>
				<s.WrapperImgItem>
					<s.ImgItem src={data.secure_url} alt="img-store" />
				</s.WrapperImgItem>
				<s.WrapperBtns>
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
				</s.WrapperBtns>
			</s.Wrapper>

			<ModalConfirm
				info={{
					title: "¿Estás seguro que deseas eliminar esta sucursal?",
					subtitle: "Esta acción no se puede deshacer",
					confirm: "Si, eliminar",
					cancel: "No, cancelar",
				}}
				onConfirm={async () => {
					await deleteItem(data.id);
					toast.success("Se elimino sucursal con éxito");
					props.refresh();
				}}
				modal={confirm}
				refresh={() => {
					props.refresh();
					setUpdate({} as IItem);
				}}
			/>

			<ModalFormItem
				update={update}
				modal={editStore}
				refresh={props.refresh}
			/>
		</>
	);
};
