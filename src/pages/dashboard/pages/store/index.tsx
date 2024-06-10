/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import * as sg from "../../styles";
import * as s from "./styles";

import { RiAddLine } from "react-icons/ri";
import { Text } from "../../../../components/atomic/text";
import { useFetchStores } from "../../../../hooks/store/useFetchStore";
import { useBoolean } from "../../../../hooks/useBoolean";
import { Header } from "../../components/header";
import { CardStore } from "./components/card-store";
import { ModalFormStore } from "./components/form-store";

export const StoreDashboard: React.FC = () => {
	const createStore = useBoolean();

	const { data: storeData, fetchStore } = useFetchStores();

	return (
		<>
			<sg.ContainerLeft>
				<Header
					title="Sucursales"
					subtitle="Crea y configura las sucursales de la marca"
					actions={
						<sg.Button onClick={createStore.on}>
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
						</sg.Button>
					}
				/>
				<sg.Body>
					{/* <s.SearchWrapper
						type="text"
						placeholder="O  Buscar por nombre de hamburguesa"
					/> */}

					<s.WrapperHeader>
						<Text weight="medium" text={"Nombre"} type="text" />
						<Text weight="medium" text={"Descripción"} type="text" />
						<Text weight="medium" text={"Apertura"} type="text" />
						<Text weight="medium" text={"Cierre"} type="text" />
						<Text weight="medium" text={"Dirección"} type="text" />
						<Text weight="medium" text={"Número"} type="text" />
						<Text weight="medium" text={"Imagen"} type="text" />
					</s.WrapperHeader>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "16px",
						}}
					>
						{storeData?.map((store) => (
							<CardStore key={store.id} refresh={fetchStore} data={store} />
						))}
					</div>
				</sg.Body>
			</sg.ContainerLeft>
			<ModalFormStore modal={createStore} refresh={fetchStore} />
		</>
	);
};
