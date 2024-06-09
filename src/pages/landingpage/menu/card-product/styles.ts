import styled from "styled-components";

export const Card = styled.div`
	display: grid;
	color: ${(props) => props.theme.white};
	position: relative;
	min-height: 220px;
	border-radius: 16px;
	background-color: ${(props) => props.theme.black};
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const Image = styled.img`
	position: absolute;
	width: 180px;
	height: 200px;
	object-fit: cover;
	object-position: center;
	border-radius: 16px;
	top: -20px;
	left: 20px;
	transition: transform 0.3s ease, box-shadow 0.3s ease;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);

	&:hover {
    transform: scale(1.1);
		box-shadow: 0 16px 32px rgba(0, 0, 0, 0.6);
  }
`;
