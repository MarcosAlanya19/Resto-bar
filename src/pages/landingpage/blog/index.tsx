import React from "react";
import { Text } from "../../../components/atomic/text";

export const Blog: React.FC = () => {
	return (
		<div
			style={{
				minHeight: "calc(100vh - 100px)",
				backgroundColor: "#bfbfbf70",
				display: "grid",
				gridTemplateColumns: "1fr 1fr",
				alignItems: "center",
				gap: "50px",
				padding: "0 200px",
			}}
		>
			<div>
				<Text text="Somos tu mejor elección" style={{ fontSize: "30px", fontWeight: "600" }} />
				<Text
					text="¡Bienvenidos a Tostado! Con dos ubicaciones en Huamanga, Ayacucho, somos el lugar perfecto donde la tradición y la innovación se fusionan. En Tostado, nos enorgullece ofrecer una experiencia gastronómica única que celebra los sabores locales con un toque moderno. Desde nuestras deliciosas tostadas artesanales hasta nuestros cócteles creativos, cada visita a Tostado promete ser una aventura culinaria. Únete a nosotros y descubre por qué somos el destino preferido para disfrutar de buenos momentos y excelente comida en Huamanga."
					style={{ fontSize: "20px" }}
				/>
			</div>
			<img src="./img/logo.jpg" width={500} />
		</div>
	);
};
