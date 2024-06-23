import styled from "styled-components";

export const Wrapper = styled.div`
	background-image: url("/img/home/hero-1-hero.png");

	background-size: cover;
	background-position: center;
	height: calc(100vh - 64px);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	position: relative;
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: 1fr 1fr;
	padding: 0 200px;
	gap: 50px;

`;

export const Name = styled.div`
	padding-left: 120px;
	display: grid;
	gap: 50px;
`;

export const Button = styled.button`
	background-color: ${(props) => props.theme.secondary};
	max-width: 200px;

	border-radius: 8px;
	border: none;

	padding: 16px 24px;
	font-size: 24px;
	color: ${(props) => props.theme.white};
	font-weight: 600;

	&:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.secondary + "99"};
	}
`;

export const Title = styled.div`
	color: ${(props) => props.theme.white};

	font-size: 40px;
	font-weight: 900;
`;

export const WrapperImg = styled.div`
	transform: rotate(5.98deg);

	img {
		width: 90%;
		height: 90%;
	}
`;
