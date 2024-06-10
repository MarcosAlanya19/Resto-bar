import { PopoverButton, PopoverPanel } from "@headlessui/react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	display: flex;
	align-items: center;
	color: #fff;

	&:hover {
		color: #eca400;
	}

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

export const MenuItem = styled.div`
	font-size: 0.875rem;
	line-height: 1.5;
	font-weight: 600;
	color: rgba(255, 255, 255, 0.5);
`;

export const StyledPopoverButton = styled(PopoverButton)`
	color: #fff;
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: transparent;
	border: none;
	outline: none;
	position: relative;

	&:hover,
	&:focus,
	&[data-active="true"] {
		color: #eca400;
		border: none;
		outline: none;
	}

	&:focus-visible {
		outline: none;
	}
`;

export const StyledPopoverPanel = styled(PopoverPanel)`
	width: 400px;
	margin-top: 25px;
`;

export const QuantityInput = styled.input`
	width: 100px;
	padding: 4px 8px;
	border-radius: 4px;
	border: none;
	background-color: #1c1c1c;
	color: white;
	text-align: right;

	-webkit-appearance: textfield;
	-moz-appearance: textfield;
	appearance: textfield;

	&::-webkit-inner-spin-button,
	&::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type="number"] {
		-moz-appearance: textfield;
	}
`;
