import { PopoverButton, PopoverPanel } from "@headlessui/react";
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
	background-color: rgba(255, 255, 255, 0.05);
	color: white;
	font-size: 0.875rem;
	line-height: 1.5;
	border-radius: 0.75rem;
	--anchor-gap: var(--spacing-5);
	divide-y: rgba(255, 255, 255, 0.05);
`;
