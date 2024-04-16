import styled from "styled-components"
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"></link>
const Offert = () => {
  const img = "https://s3-alpha-sig.figma.com/img/1784/6bab/e243ebd6c524fece4c759c1f3ca9ebe5?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YIrOZeBy1BQkEmm~O~Ui5ylLfEN1chtj2ccCFU~LMs2unaMfyIq9Sg9y~pNJAy-VbGptJPjEHlE~Hkefrx7tqi5B8bxM7skMigfg7BBYXl5I2brTxWlzFmGrmiXwhxmwBLMwdN88Z5194pVOxY9hDAXh-zHq7ZIXba-rTW61p-SpQTZ3P0rGROCAf26e9oXouuBw7L9o0WbdSjn5~zXjGkVwnyEaplEOwZJ715lnr84DAUVNwbhkgVpE1t4AeEyNHt0u1a8oYfrqCINsYg-VDPYMScSMpDT3D~tmrIawpS-KAUwLalB6iXHvC7awt2UJ~uG9ZCAdEX5V1VEJ-8g1EA__"
  const Title = styled.div`
    font-family: "Dancing Script", cursive;
    color: ${(props)=> props.theme.white};
    font-size: 60px;
    font-weight: 600;
  `;
  const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${(props)=> props.theme.secondary};
  `;
  const WrapperImg = styled.div`
    img {
      width: 85%;
      height: 85%;
    }
  `;
  const WrapperButton = styled.button`
  background-color: ${(props)=> props.theme.terceary};
  font-family: "Dancing Script", cursive;
    color: ${(props)=> props.theme.white};
    font-size: 40px;
    font-weight: 600;
    border-radius: 25px;
  `;
  const WrapperTitle2 = styled.h1`
  color: ${(props)=> props.theme.primary};
  font-family: "Dancing Script", cursive;
  
  `;
  return (
    <Wrapper>
      <WrapperImg>
        <img src={img} alt="img-ofert" width={400} height={300} />
      </WrapperImg> 
      <div>
        <Title>Prueba nuestra</Title>
        <Title>nueva</Title>
        <WrapperTitle2>Burguer Hot Beacon</WrapperTitle2>
        <WrapperButton>pidela aqui</WrapperButton>
      </div>
    </Wrapper>
  )
}

export default Offert
