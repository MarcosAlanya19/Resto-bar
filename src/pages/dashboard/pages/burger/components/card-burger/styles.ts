import styled from "styled-components";

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
