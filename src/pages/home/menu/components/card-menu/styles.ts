import styled from "styled-components";

export const Card = styled.div`
	border-radius: 24px;
	background-color: ${(props) => props.theme.black};
	color: ${(props) => props.theme.white};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
