import styled from "styled-components";

export const Wrapper = styled.div`
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	background-color: #fff;
	display: grid;
	gap: 16px;
	grid-template-columns: 1fr 0.5fr 1fr 150px 1.5fr 100px 100px;
	padding: 8px 16px;
`;

export const WrapperIcon = styled.div<{ alert: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid #ced4da;
	width: 38px;
	height: 38px;
	border-radius: 8px;
	color: #000;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => (props.alert ? "#FCD3D0" : "#F8F9FA")};
		color: ${(props) => (props.alert ? "#BE1C12" : "#495057")};
	}
`;

export const ImgItem = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const WrapperImgItem = styled.div`
	width: 50px;
	height: 50px;
	overflow: hidden;
`;

export const WrapperBadge = styled.div`
	display: flex;
	flex-direction: column;
	gap: 4px;
`;

export const BadgeStore = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #bfbfbf70;
	border-radius: 8px;
	text-transform: uppercase;
	max-width: 180px;
`;

export const WrapperBtns = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 1fr;
	gap: 8px;
`;
