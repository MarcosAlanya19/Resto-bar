import * as s from "./styles";
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap" rel="stylesheet"></link>
const Restaurant = () => {

  const img = "https://s3-alpha-sig.figma.com/img/a28a/5360/0349c3afb26169a3c64e5c57de6dc2ff?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J-Oak37sD8BunBCLDwVI-FhRZJSwntvQMCfzsIckaoZtSdBa396LLzDXs3nEXlCBFi8gQsOEUU-qc7h1EPTmP8aidPd5me58ZKsLS6BUSGbGXq62wUVPb4WBmJ45itloRd~18ASqGXL8S9CbZrIJ5MdUKLNse-JfBGhmSJn6KOu5rlEyTiNkUArrWcjIBtjHcIfzOwgjUTOds97G6o~V0FH6IoJAJD81K8rvsN4wYPjazUs9h2saJIGDkUBYV~wc6j6RaDyqvWxxo1hfJfQvSRqCVgm8tlKqWGWWs7rS5-xJTlnUI5cOSA1z6EMXlkbIPyYdKTW4V1FmOcPtTrzrRA__"

  const boyaca = "https://s3-alpha-sig.figma.com/img/1e37/49c0/26d29cf7ff2668b1e436c5d4358fe0f1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nHf4Ca5NjSfrdNOZRcEfROg6aeDTeM~Dywxfi~YreS3UXE7uByZAdcwzrF16e7Ae-~CApiCEsLTNUoT9myb6JpAOLtIaTyiAC~KHOoy9tl6KXf4huodqqYSd7yur3LZ1-7VLP-HA6UhczkxgHG6~cgq31Lo1Yl-BodjotNkjjFAq5fOSgKh8kJN42p6oFnXXBW7SiGDqhuzJwyog~GQZqF~iuhHMD4MlvXELDjByhmxqeHg-E-ZTDskqDks8wB7snyXM6RE9IDBq1sNvVCf9CA32IdDPMXo34zpvYpdrezkZWcJ7QjgXSbqh0SeYl~c3WrHr9-0~2oDk6E~605lpbQ__"


  const usaquen = "https://s3-alpha-sig.figma.com/img/b805/89bd/fe4c5737e13f9f9935c2f8f7865debd3?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LoPNPkj3fDeoswHxwLe9myX-DChBLfXtfgg~72qJTaZT7wPJq~lua1Mg-wWDM2cbct5QXHcC~SptFb6~9UL-ZQRLg9JRaQe8rgajdS99K1v1d2Xg6hAogk-cDnNbtu9i7LMX2dEM7rAXFUyab1VgmRIMyfpiu-4J5TU0n-I4AlwmJQt~BgqaEFnyTKepvqlcDHF8w0Og4m9oXlASEflQNUh7hfTBVPYdrZN92pavAqkqVkfqibsZU19AZ4ClV6vokU2Lx5rZ9JDNdDW~0krsG18B9Q2HEUx506tliph~edAnMMF8DVbg7k9Mc8mxbWzlG~HcGWNNvrF01AhCtQx5lw__"

  const leiva = "https://s3-alpha-sig.figma.com/img/3269/f3a2/f28895c480caada7c911768a6354dec1?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FPZaNxDk5-qpFm1kKWX~piQESxTSZ-MsAmOp3qPTasOI7t09JC-P3mf0Ck0Hrr2gA2CCvecHzUAuRis4AXfLYiKPIvXz5QLTFelN1pOH~2ooUrZIpCX6R~JTWSRExglVQnGa-J1Z6lrpV5SNgIu3OQqqMKO5v71LwK-45L7QR-1z7XoWHGLUQeDh5zRKzgYBB7WbiBSCFNKxvZvFVGOnBNChdtV3lGxUoxcYxzSBj943EBS~QjLsMZWZY0KBRyeXUbay2aJPL2Fljt0KHMs0txKmIugF3jV~a9GTv6m3fdD48h2Nd-zjGX9BQ7jZuq48Q0eL18fDAlb6IDgKW2E~YA__"

  return (
    <s.Wrapper>
      <s.WrapperSecond>
        <s.Title>Domicilio</s.Title> 
        <s.WrapperImg>
          <img src={img} alt="img-restaurant" />
        </s.WrapperImg>
        <br />
        <br />
        <s.Module>
          <s.Inside style={{fontSize:"50px"}}>Llamanos al:</s.Inside>
          <s.Inside>605 1444-88</s.Inside>
        </s.Module>
        <br />
        <br />
        <s.Module>
          <s.Inside style={{fontSize:"50px"}}>Escribenos al:</s.Inside>
          <s.Inside>+57 232 5456286</s.Inside>
        </s.Module>
      </s.WrapperSecond>
      <s.WrapperTerceary>
        <s.Title1>Restaurantes</s.Title1>
        <s.WrapperCard>
          <s.WrapperImg>
            <img src={boyaca} alt="img-boyaca" />
          </s.WrapperImg>
          <s.Text>
            <s.Inside>Rest. CC Boyaca</s.Inside>
            <s.Inside>Cr. 155#22-55</s.Inside>
            <s.Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum aut placeat consectetur recusandae quod. Sint non, autem velit illum suscipit beatae magnam modi pariatur perspiciatis exercitationem ex ab rerum.</s.Parrafo>
          </s.Text>  
        </s.WrapperCard>
        <s.WrapperCard>
          <s.WrapperImg>
            <img src={usaquen} alt="img-boyaca" />
          </s.WrapperImg>
          <s.Text>
            <s.Inside>Rest. Usaquen</s.Inside>
            <s.Inside>Cr. 155#22-55</s.Inside>
            <s.Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum aut placeat consectetur recusandae quod. Sint non, autem velit illum suscipit beatae magnam modi pariatur perspiciatis exercitationem ex ab rerum.</s.Parrafo>
          </s.Text>  
        </s.WrapperCard>
        <s.WrapperCard>
          <s.WrapperImg>
            <img src={leiva} alt="img-boyaca" />
          </s.WrapperImg>
          <s.Text>
            <s.Inside>Rest. Villa Leiva</s.Inside>
            <s.Inside>Cr. 155#22-55</s.Inside>
            <s.Parrafo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ipsum aut placeat consectetur recusandae quod. Sint non, autem velit illum suscipit beatae magnam modi pariatur perspiciatis exercitationem ex ab rerum.</s.Parrafo>
          </s.Text>  
        </s.WrapperCard>
      </s.WrapperTerceary>
    </s.Wrapper>
  )
}

export default Restaurant
