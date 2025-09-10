import { Container } from "../../container";
import { CountDown } from "../../count-down";
import { Form } from "../../form";
import { Template } from "../../templates/main-template/template";

const Home = () => {
	return (
		<Template>
			<Container>
				<CountDown />
			</Container>
			<Container>
				<Form />
			</Container>
		</Template>
	);
};

export { Home };
