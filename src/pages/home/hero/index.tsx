import * as s from "./style";

const Hero = () => {
	
	const img =
		"https://s3-alpha-sig.figma.com/img/32a9/6b23/5dde658f0ce4b45b38e24b2a6ecb2dc6?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e-VmWyLWePkyUwjLEmlpTSaFWmfQqfVkketmXRUKDgTDcV~Jh52reTkbgSVFknK~FBrhK6YMHf6k94sooIHsdpTuqeC9vf7WOPwS3PB4T6Aq3McqQX88DIXCx7EpKv7O5YPvfFcDd3x25LFZPsZuRiszDX-QpROVhcYuEzD-gRqk9MzfLaXSSbwfVz-OFAIUBYCT5SeLxHTXRXHdEiqLnhnFl59htD1WOpR~Zofkp2max1eCq0zVHSLyMx9CMWD~rsaBk~iP8AxT5paIPoySHHffWRAvY5QzDwoX3Sf150KcCBu153VaPWLQaYaUSnTFX7mw4hmxdXJb~d-Q-frYDA__";

	return (
		<s.Wrapper>
			<s.Name>
				<s.Title>La mejor Hamburguesa</s.Title>
				<s.Button>Pide ahora</s.Button>
			</s.Name>

			<s.WrapperImg>
				<img src={img} alt="img-hero" />
			</s.WrapperImg>
		</s.Wrapper>
	);
};

export default Hero;
