import { Text } from "../../../../components/atomic/text";
import { useFetchBurgers } from "../../../../hooks/burger/useFetchBurger";
import { CardMenu } from "./components/card-menu";
import * as s from "./styles";

const Menu1 = () => {
	const { data: dataBurger } = useFetchBurgers();

	return (
		<div
			style={{
				backgroundColor: "#bfbfbf80",
				paddingBottom: "48px",
				borderBottom: "2px dashed #bfbfbf",
			}}
		>
			<div
				style={{ display: "flex", justifyContent: "center", padding: "24px" }}
			>
				<Text
					text="Explora el Menú"
					type="title"
					style={{ fontSize: "50px" }}
				/>
			</div>
			<s.WrapperCard>
				{dataBurger.map((data) => (
					<CardMenu
						key={data.id}
						img={data.secure_url}
						title={data.item_name}
						price={data.price}
						description={data.description}
					/>
				))}
			</s.WrapperCard>
		</div>
	);
};

export default Menu1;
