import styled from "styled-components";

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
	align-items: center;
    padding: 35px 0px;
`;

export const WrapperTerceary = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const WrapperSecond = styled.div`
    padding-left: 30px;
    padding-right: 30px;
`;

export const Module = styled.div`
    background-color: ${(props) => props.theme.black};
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    border-radius: 30px;
    
`;

export const Inside = styled.h2`
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-family: "Dancing Script", cursive;
    color: ${(props) => props.theme.white};
`;

export const WrapperImg = styled.div`

	img {
		width: 100%;
		height: 100%;
        border-radius:25px 0px 0px 25px;

	}

`;

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 64px;
    font-family: "Dancing Script", cursive;
`;

export const Title1 = styled.h1`
    display: flex;
    justify-content: center;
    font-size: 64px;
    padding-right: 170px;
    font-family: "Dancing Script", cursive;
`;

export const WrapperCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-right: 200px;
    img {
        width:100%;
        height: 100%;
    }
`;

export const Text = styled.div`
    background-color:${(props) => props.theme.black};
    border-radius:0px 25px 25px 0px;
`;

export const Parrafo = styled.p`
    color: ${(props) => props.theme.white};
`;

