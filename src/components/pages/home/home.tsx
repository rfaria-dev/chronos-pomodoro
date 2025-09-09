import type { TaskStateModel } from "../../../models/task-state-model";
import { Container } from "../../container";
import { CountDown } from "../../count-down";
import { Form } from "../../form";
import { Template } from "../../templates/main-template/template";

type HomeProps = {
	state: TaskStateModel;
	setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};
const Home = (props: HomeProps) => {
	return (
		<Template>
			<Container>
				<CountDown {...props} />
			</Container>
			<Container>
				<Form {...props} />
			</Container>
		</Template>
	);
};

export { Home };
export type { HomeProps };
