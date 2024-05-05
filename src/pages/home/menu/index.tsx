import { CardMenu } from "./components/card-menu";
import * as s from "./styles";
import { vars } from "./utils/vars";

const Menu1 = () => {
	return (
		<div>
			<s.Title>Explora el Menú</s.Title>
			<s.WrapperCard>
				{vars.menu.map((data) => (
					<CardMenu
						key={data.title}
						img={data.img}
						title={data.title}
						price={data.price}
						description={data.description}
					/>
				))}
			</s.WrapperCard>
		</div>
	);
};

export default Menu1;
