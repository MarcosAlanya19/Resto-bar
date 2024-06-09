import {
	RiBubbleChartLine,
	RiBuilding4Line,
	RiLogoutCircleLine,
} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Text } from "../../../../components/atomic/text";
import { useUserCartContext } from "../../../../context/userContext";
import * as s from "./styles";

export const AsideModal = () => {
	const { user, setUser } = useUserCartContext();
	const navigate = useNavigate();

	return (
		<s.Sidebar>
			<div
				style={{
					display: "grid",
					alignItems: "center",
					justifyItems: "center",
					margin: "80px 0",
				}}
			>
				<Text
					text="EL TOSTADO."
					type="title"
					weight="medium"
					style={{ fontSize: "32px" }}
				/>
				<Text
					style={{ textAlign: "center" }}
					text="Restobar"
					type="text"
					weight="medium"
				/>
			</div>

			<div>
				<s.StyledNavLink to={"/dashboard/store"}>
					<Text
						leftIcon={<RiBuilding4Line />}
						text="Sucursales"
						type="textDefault"
					/>
				</s.StyledNavLink>
				<s.StyledNavLink to={"/dashboard/burguer"}>
					<Text
						leftIcon={<RiBubbleChartLine />}
						text="Hamburguesas"
						type="textDefault"
					/>
				</s.StyledNavLink>
			</div>
			<div style={{ display: "grid", gap: "8px" }}>
				<s.BtnLogout
					onClick={() => {
						setUser(null);
						navigate("/login");
						toast.success("Cerrado de sesión exitoso");
					}}
				>
					<Text
						leftIcon={<RiLogoutCircleLine />}
						weight="medium"
						text={"Cerrar Sesión"}
						type="textDefault"
					/>
				</s.BtnLogout>
				<div
					style={{
						backgroundColor: "#bfbfbf30",
						padding: "8px",
						borderRadius: "8px",
					}}
				>
					<Text text={"Bienvendido"} type="text" weight="medium" />

					<div style={{ display: "flex", gap: "4px" }}>
						<Text
							text={`${user?.user_name} - ` ?? ""}
							type="text"
							weight="semiBold"
						/>
						<Text text={` ${user?.email}` ?? ""} type="text" />
					</div>
				</div>
			</div>
		</s.Sidebar>
	);
};
