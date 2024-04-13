import * as s from "./styles";
import { vars } from "./utils/vars";

const Restaurant = () => {
	return (
		<s.Wrapper>
			<s.WrapperSecond>
				<s.Title>Domicilio</s.Title>
				<s.WrapperImg>
					<img src={vars.img.img_currier} alt="img-restaurant" />
				</s.WrapperImg>
				<br />
				<br />
				<s.Module>
					<s.Inside style={{ fontSize: "50px" }}>Llamanos al:</s.Inside>
					<s.Inside>605 1444-88</s.Inside>
				</s.Module>
				<br />
				<br />
				<s.Module>
					<s.Inside style={{ fontSize: "50px" }}>Escribenos al:</s.Inside>
					<s.Inside>+57 232 5456286</s.Inside>
				</s.Module>
			</s.WrapperSecond>
			<s.WrapperTerceary>
				<s.Title1>Restaurantes</s.Title1>
				<s.WrapperCard>
					<s.WrapperImg>
						<img src={vars.img.restaurant_boyaca} alt="img-boyaca" />
					</s.WrapperImg>
					<s.Text>
						<s.Inside>Rest. CC Boyaca</s.Inside>
						<s.Inside>Cr. 155#22-55</s.Inside>
						<s.Parrafo>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							ipsum aut placeat consectetur recusandae quod. Sint non, autem
							velit illum suscipit beatae magnam modi pariatur perspiciatis
							exercitationem ex ab rerum.
						</s.Parrafo>
					</s.Text>
				</s.WrapperCard>
				<s.WrapperCard>
					<s.WrapperImg>
						<img src={vars.img.restaurant_usaque} alt="img-boyaca" />
					</s.WrapperImg>
					<s.Text>
						<s.Inside>Rest. Usaquen</s.Inside>
						<s.Inside>Cr. 155#22-55</s.Inside>
						<s.Parrafo>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							ipsum aut placeat consectetur recusandae quod. Sint non, autem
							velit illum suscipit beatae magnam modi pariatur perspiciatis
							exercitationem ex ab rerum.
						</s.Parrafo>
					</s.Text>
				</s.WrapperCard>
				<s.WrapperCard>
					<s.WrapperImg>
						<img src={vars.img.restauratn_leiva} alt="img-boyaca" />
					</s.WrapperImg>
					<s.Text>
						<s.Inside>Rest. Villa Leiva</s.Inside>
						<s.Inside>Cr. 155#22-55</s.Inside>
						<s.Parrafo>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
							ipsum aut placeat consectetur recusandae quod. Sint non, autem
							velit illum suscipit beatae magnam modi pariatur perspiciatis
							exercitationem ex ab rerum.
						</s.Parrafo>
					</s.Text>
				</s.WrapperCard>
			</s.WrapperTerceary>
		</s.Wrapper>
	);
};

export default Restaurant;
