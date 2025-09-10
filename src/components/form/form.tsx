import { PlayCircleIcon } from "lucide-react";
import { Button } from "../button";
import { Cycles } from "../cycles";
import { Input } from "../input";

const Form = () => {
	const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
		console.log("Logged!");
		event.preventDefault();
	};

	return (
		<form onSubmit={(e) => handleCreateNewTask(e)} action="" className="form">
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
				<p>The next interval in : 25 min.</p>
			</div>
			<Cycles />
			<div className="formRow">
				<Button color="red" icon={<PlayCircleIcon />} />
			</div>
		</form>
	);
};

export { Form };
