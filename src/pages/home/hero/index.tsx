import { Link } from "react-router-dom";
import { Text } from "../../../components/atomic/text";
import * as s from "./style";

const Hero = () => {
	return (
		<div>
			<div
				style={{
					height: "64px",
					backgroundColor: "#0e0e0e",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					paddingInline: "40px",
					color: "#fff",
				}}
			>
				<div
					style={{ display: "grid", justifyItems: "center", lineHeight: "1" }}
				>
					<Text text="TOSTADO" type="textDefault" weight="bold" />
					<Text text="restobar." type="textDefault" />
				</div>

				<div style={{ display: "flex", gap: "40px" }}>
					<Link to={"menu"}>
						<Text text="Menú" type="textDefault" />
					</Link>
					<Text text="Blog" type="textDefault" />
				</div>
			</div>
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
		</div>
	);
};

export default Hero;
