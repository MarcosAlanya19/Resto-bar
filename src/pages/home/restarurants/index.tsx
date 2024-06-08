import * as s from "./styles";

import { Text } from "../../../components/atomic/text";
import { useFetchStores } from "../../../hooks/store/useFetchStore";
import { CardRestaurant } from "./components/card-restaurant";
import { theme } from "../../../main";

const Restaurant = () => {
	const { data: dataStore } = useFetchStores();

	return (
		<div>
			<s.Wrapper>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						text="Domicilio"
						weight="semiBold"
						style={{ fontSize: "50px" }}
					/>
					<img
						src={"./img/restaurant/delivery.png"}
						alt="img-delivery"
						height={220}
						width={220}
					/>
					<div style={{ display: "grid", gap: "10px" }}>
						<s.WrapperNumbers>
							<div>Llamanos al:</div>
							<div
								style={{
									fontFamily: "Poppins",
									fontSize: "20px",
									fontWeight: "normal",
								}}
							>
								605 1444-88
							</div>
						</s.WrapperNumbers>
						<s.WrapperNumbers>
							<div>Escribenos al:</div>
							<div
								style={{
									fontFamily: "Poppins",
									fontSize: "20px",
									fontWeight: "normal",
								}}
							>
								+57 232 5456286
							</div>
						</s.WrapperNumbers>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: "50px",
					}}
				>
					<Text
						text="Restaurantes"
						weight="semiBold"
						style={{ fontSize: "50px" }}
					/>
					<s.WrapperCard>
						{dataStore.map((data) => (
							<CardRestaurant key={data.id} data={data} />
						))}
					</s.WrapperCard>
				</div>
			</s.Wrapper>
			<div
				style={{
					backgroundColor: theme.black,
					height: "40px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					text="Todos los derechos reservados  © 2024
					"
					weight="medium"
					type="text"
					style={{ color: "#fff" }}
				/>
			</div>
		</div>
	);
};

export default Restaurant;
