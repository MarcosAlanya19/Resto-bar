import styled from "styled-components"
const Main = styled.div `
  background-image: url();
  /*position: absolute;
  width: 681px;
  height: 420px;
  left: 0px;
  top: 48px;*/
  display: flex;
  justify-content: center;

  height: 800px;

  background: #2F2D2E;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);


  /*position: absolute;
  width: 681px;
  height: 260.95px;
  left: 0px;
  top: 128px;

  background: #ECA400;*/

`;

const Name = styled.div `
width: 800px;
display: inline-block;
font-size: 70%;
margin-right: 200px;
margin-top: 150px;
align-content: center center;
`;

const Button = styled.button `
  width: 200px;
  height: 50px;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-weight: 500;
  background-color: #F14A41;
  cursor: pointer;
  transition: border-color 0.25s;
  color: white;
  font-weight: 900;
  font-size: 1.5em;
  align-content: center center;
`;
 
const Title = styled.div `
  color: white;
  font-size: 400%;
  margin-bottom: 20px;
  margin-top: 50px;
  font-weight: 900;
  font-size: 8em;
`;

const Img = styled.div `
  margin-top: 7%;
  transform: rotate(5.98deg);
  display: inline-block;
  top: 57px;
  left: 324.51px;
  display: flex;
  margin-left: -130px;

`
const Hero = () => {
  return (
    <Main>
      <Name>
        <Title>La mejor Hamburguesa</Title>
        <Button>Pide ahora</Button>
      </Name>

      <Img>
        <img src="https://s3-alpha-sig.figma.com/img/32a9/6b23/5dde658f0ce4b45b38e24b2a6ecb2dc6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atVa0GLmWg7V30VsbbbKh2CPC-d3lawePZ5fk~tjYxOBdMumUYn-y8plGU~8L9f5ALHaSR0eOqriLdOUWZYVkgua6J8cPt0wTovABY166n8i9nOkV7oU2T9etGKHGUf44bpoMkg6GjH4W74S3syVAItezQcPFRcAQxfhSPqQNUr0qsoIdpypilvQU8RYaRG7hC-DAvOhL1m3ZZd~52yXSzeL2eFK44YftIVDIIUlONXrFwdR1j5UQjFYOR5qL0uQ5gvYmgN36RbaLhplh2mgpJ~sf5sETf-xdYF9zLcqX4LwUzxQRmjtDqRSMuTCMo8wuGeSKuLYVQqVM7xispaMgg__" alt="" width={524.37} height={473.66}/>
      </Img>
    </Main>
  )
}

export default Hero
