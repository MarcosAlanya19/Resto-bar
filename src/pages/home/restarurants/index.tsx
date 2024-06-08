import { useFetchStores } from "../../../hooks/store/useFetchStore";
import { CardRestaurant } from "./components/card-restaurant";
import * as s from "./styles";
import { vars } from "./utils/vars";

const Restaurant = () => {
	const { data: dataStore } = useFetchStores();

	return (
		<s.Wrapper>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<s.Title>Domicilio</s.Title>
				<img
					src={vars.img.img_currier}
					alt="img-restaurant"
					height={330}
					width={330}
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

			<div>
				<s.Title>Restaurantes</s.Title>
				<s.WrapperCard>
					{dataStore.map((data) => (
						<CardRestaurant
							key={data.id}
							img={data.secure_url}
							title={data.store_name}
							subtitle={data.phone}
							description={data.description}
						/>
					))}
				</s.WrapperCard>
			</div>
		</s.Wrapper>
	);
};

export default Restaurant;
