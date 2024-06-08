import * as s from "./style";

import { Text } from "../../../../components/atomic/text";

const Hero = () => {
	return (
		<>
			<s.Wrapper>
				<div style={{ color: "#fff", lineHeight: 1 }}>
					<Text
						weight="semiBold"
						text="¡Deliciosos sabores, "
						style={{ fontSize: "70px", color: "#F14A41" }}
					/>
					<Text
						weight="semiBold"
						text="momentos tostados para"
						style={{ fontSize: "70px", color: "#ECA400" }}
					/>
					<Text
						weight="semiBold"
						text="recordar!"
						style={{ fontSize: "70px" }}
					/>
				</div>
				<div
					style={{
						display: "grid",
						justifyItems: "center",
						alignItems: "center",
						background: "#0e0e0e",
						height: "500px",
						width: "500px",
						borderRadius: "50%",
					}}
				>
					<div
						style={{
							display: "grid",
							justifyItems: "center",
							alignItems: "center",
							border: "2px dashed #fff",
							height: "470px",
							width: "470px",
							borderRadius: "50%",
						}}
					>
						<div
							style={{
								display: "grid",
								justifyItems: "center",
								color: "#fff",
								lineHeight: "1",
							}}
						>
							<Text text="TOSTADO" style={{ fontSize: "70px" }} weight="bold" />
							<Text text="restobar." style={{ fontSize: "50px" }} />
						</div>
					</div>
				</div>
			</s.Wrapper>
		</>
	);
};

export default Hero;
