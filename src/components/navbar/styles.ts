import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: #fff;

	&.active div {
		font-weight: 600;
	}

	&.active {
		color: #eca400;
		border-bottom: 1px solid #eca400;
	}

	&.pending div {
		font-weight: 600;
	}

	&.default div {
		color: #fff;
	}
`;
