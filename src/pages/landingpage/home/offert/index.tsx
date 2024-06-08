import { FaFacebook, FaInstagram } from "react-icons/fa6";
import styled from "styled-components";
import { Text } from "../../../../components/atomic/text";
import { theme } from "../../../../main";

const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 2fr;
	background-color: ${(props) => props.theme.black};
	padding: 48px 24px 0;
`;

const StyledLink = styled.a`
	display: flex;
	gap: 20px;
	text-decoration: none;
	color: inherit;
	&:hover {
		text-decoration: none;
	}
`;

const Offert = () => {
	return (
		<Wrapper>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<img
					src={"./img/social/social.png"}
					alt="img-ofert"
					style={{ objectFit: "cover", height: "380px" }}
				/>
			</div>

			<div
				style={{
					lineHeight: "1",
					color: "#fff",
					display: "grid",
					alignItems: "center",
				}}
			>
				<Text
					text="Visitanos en nuestras redes sociales."
					weight="semiBold"
					style={{ fontSize: "50px" }}
				/>
				<div
					style={{
						display: "flex",
						gap: "20px",
						alignItems: "center",
						color: "#ECA400",
					}}
				>
					<StyledLink
						href="https://www.facebook.com/Tostadorestobar"
						target="_blank"
					>
						<FaFacebook size={80} />
						<Text text="Tostado Restobar" style={{ fontSize: "40px" }} />
					</StyledLink>
				</div>
				<div
					style={{
						display: "flex",
						gap: "20px",
						alignItems: "center",
						paddingBottom: "48px",
						color: "#F14A41",
					}}
				>
					<StyledLink
						target="_blank"
						href="https://www.instagram.com/tostadorestobar/"
					>
						<FaInstagram size={80} />
						<Text text="@tostadorestobar" style={{ fontSize: "40px" }} />
					</StyledLink>
				</div>
			</div>
		</Wrapper>
	);
};

export default Offert;
