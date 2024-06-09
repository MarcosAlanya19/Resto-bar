import { useFetchBurgers } from "../../../hooks/burger/useFetchBurger";
import { useFetchStores } from "../../../hooks/store/useFetchStore";
import { MenuItemType } from "../../../types/burger.type";
import { CardMenuComplete } from "./card-product";

interface IOptions {
	label: string;
	value: MenuItemType;
}

const options: IOptions[] = [
	{
		label: "Todos",
		value: MenuItemType.Never,
	},

	{
		label: "Bebida",
		value: MenuItemType.Beverage,
	},
	{
		label: "Hamburguesa",
		value: MenuItemType.Burger,
	},
	{
		label: "Otro",
		value: MenuItemType.Other,
	},
];

const Menu = () => {
	const { data: dataItem } = useFetchBurgers();
	const { data: dataStore } = useFetchStores();

	return (
		<div
			style={{ backgroundColor: "#bfbfbf40", minHeight: "calc(100vh - 60px)" }}
		>
			<div style={{ paddingTop: "50px" }}>
				<div
					style={{
						boxSizing: "content-box",
						display: "grid",
						gridTemplateColumns: "2fr 1fr 1fr",
						gap: "16px",
						alignItems: "center",
						width: "90vw",
						margin: "0 auto",
						padding: "16px",
						borderRadius: "8px",
						backgroundColor: "#0e0e0e",
					}}
				>
					<input
						type="search"
						placeholder="Buscar por nombre"
						style={{
							borderRadius: "8px",
							padding: "10px",
							boxSizing: "border-box",
							border: "1px solid #ccc",
							fontSize: "16px",
						}}
					/>
					<select
						style={{
							borderRadius: "8px",
							padding: "10px",
							boxSizing: "border-box",
							border: "1px solid #ccc",
							fontSize: "16px",
						}}
					>
						<option value="" disabled selected hidden>
							{"Seleccione categoría"}
						</option>
						{options.map((option, index) => (
							<option key={index} value={option.value}>
								{option.label}
							</option>
						))}
					</select>

					<select
						style={{
							borderRadius: "8px",
							padding: "10px",
							boxSizing: "border-box",
							border: "1px solid #ccc",
							fontSize: "16px",
						}}
					>
						<option value="" disabled selected hidden>
							{"Seleccione Tienda"}
						</option>
						{dataStore.map((option, index) => (
							<option key={index} value={option.id}>
								{option.store_name}
							</option>
						))}
					</select>
				</div>
			</div>

			<div
				style={{
					margin: "0 auto",
					width: "90vw",
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "16px",
					rowGap: "80px",
					padding: "70px 0",
				}}
			>
				{dataItem.map((data) => (
					<CardMenuComplete
						key={data.id}
						data={data}
					/>
				))}
			</div>
		</div>
	);
};

export default Menu;
