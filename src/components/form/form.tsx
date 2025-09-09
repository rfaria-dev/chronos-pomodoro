import { PlayCircleIcon } from "lucide-react";
import { Button } from "../button";
import { Cycles } from "../cycles";
import { Input } from "../input";
import type { HomeProps } from "../pages/home/home";

type FormProps = HomeProps;

const Form = ({ state, setState }: FormProps) => {
	return (
		<form action="" className="form">
			<div>
				<button
					onClick={() => {
						setState((prevState) => {
							return {
								...prevState,
								config: {
									...prevState.config,
									workTime: 34,
								},
								formattedSecondsRemaining: "12:00",
							};
						});
					}}
				>
					ClickMe
				</button>
			</div>
			<div className="formRow">
				<Input
					placeholder="Digite algo..."
					id="formInput"
					type="text"
					labelText="task"
					title="Titulo"
				/>
			</div>
			<div className="formRow">
				<p>The next interval in : {state.config.workTime} min.</p>
			</div>
			<Cycles />
			<div className="formRow">
				<Button color="red" icon={<PlayCircleIcon />} />
			</div>
		</form>
	);
};

export { Form };
