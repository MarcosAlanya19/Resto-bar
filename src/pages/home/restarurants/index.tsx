import * as s from "./styles";

import { Text } from "../../../components/atomic/text";
import { useFetchStores } from "../../../hooks/store/useFetchStore";
import { CardRestaurant } from "./components/card-restaurant";

const Restaurant = () => {
	const { data: dataStore } = useFetchStores();

	return (
		<>
			<s.Wrapper>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						gap: "24px",
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
					<s.WrapperNumbers>
						<div
							style={{
								lineHeight: "1",
								justifyItems: "center",
								alignItems: "center",
								display: "grid",
							}}
						>
							<Text
								text="Realizamos"
								weight="medium"
								style={{ fontSize: "30px" }}
							/>
							<Text
								text="Delivery"
								weight="medium"
								style={{ fontSize: "30px" }}
							/>
						</div>
						<div
							style={{
								fontFamily: "Poppins",
								fontSize: "20px",
								fontWeight: "normal",
							}}
						>
							+51{dataStore[0]?.phone ?? "-"}
						</div>
					</s.WrapperNumbers>
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
						{dataStore?.map((data) => (
							<CardRestaurant key={data.id} data={data} />
						))}
					</s.WrapperCard>
				</div>
			</s.Wrapper>
			<div
				style={{
					backgroundColor: "#0e0e0e",
					height: "40px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text
					text="Todos los derechos reservados  © 2024"
					weight="medium"
					type="text"
					style={{ color: "#fff" }}
				/>
			</div>
		</>
	);
};

export default Restaurant;
