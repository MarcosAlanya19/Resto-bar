import { Text } from "../../../../components/atomic/text";
import * as s from "./styles";

interface IProps {
	title: string;
	userInfo?: boolean;
	// routes: IPageConfig<any>[];
	// goToPage: (slug: string) => void;
}

export const AsideModal: React.FC<IProps> = (props) => {
	return (
		<s.Sidebar>
			<Text text={props.title} type="title" weight="medium" />
			{/* <s.Sections> */}
			{/* {props.routes.map((section) => ( */}
			{/* <Section pages={section.pages} title={"sdasd"} /> */}
			{/* ))} */}
			{/* </s.Sections> */}
		</s.Sidebar>
	);
};
