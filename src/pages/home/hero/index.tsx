import * as s from "./style";

const Hero = () => {
	const img =
		"https://s3-alpha-sig.figma.com/img/32a9/6b23/5dde658f0ce4b45b38e24b2a6ecb2dc6?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=atVa0GLmWg7V30VsbbbKh2CPC-d3lawePZ5fk~tjYxOBdMumUYn-y8plGU~8L9f5ALHaSR0eOqriLdOUWZYVkgua6J8cPt0wTovABY166n8i9nOkV7oU2T9etGKHGUf44bpoMkg6GjH4W74S3syVAItezQcPFRcAQxfhSPqQNUr0qsoIdpypilvQU8RYaRG7hC-DAvOhL1m3ZZd~52yXSzeL2eFK44YftIVDIIUlONXrFwdR1j5UQjFYOR5qL0uQ5gvYmgN36RbaLhplh2mgpJ~sf5sETf-xdYF9zLcqX4LwUzxQRmjtDqRSMuTCMo8wuGeSKuLYVQqVM7xispaMgg__";

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
