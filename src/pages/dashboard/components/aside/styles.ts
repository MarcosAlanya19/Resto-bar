import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Sections = styled.div`
	display: flex;
	flex-direction: column;
	gap: 12px;
	width: 100%;

	> div:not(:last-child) {
		border-bottom: 1px solid ${(props) => props.theme.color.NEUTRAL_NEW[400]};
		padding-bottom: 12px;
	}
`;

export const Sidebar = styled.div`
	display: grid;
	grid-template-rows: auto 1fr auto;

	gap: 12px;
	padding: 16px;
	padding-top: 24px;
	width: 100%;
	background-color: #fff;
`;

export const Body = styled.div`
	padding: 0 20px;
`;

export const StyledNavLink = styled(NavLink)`
	padding: 13px 12px;
	border-radius: 8px;
	text-decoration: none;
	display: flex;
	align-items: center;
	color: #000;

	&.active div {
		font-weight: bold;
	}

	&.active {
		background-color: #edf3fc;
	}

	&.pending div {
		font-weight: 600;
	}

	&.default div {
		color: black;
	}
`;

export const BtnLogout = styled.div`
	padding: 16px 8px;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	align-items: center;
	gap: 8px;

	&:hover {
		background-color: #bfbfbf20;
		> div {
			font-weight: bold;
		}
	}
`;
