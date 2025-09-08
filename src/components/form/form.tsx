import { PlayCircleIcon } from "lucide-react";
import { Button } from "../button";
import { Cycles } from "../cycles";
import { Input } from "../input";

const Form = () => {
	return (
		<form action="" className="form">
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
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
			<Cycles />
			<div className="formRow">
				<Button color="red" icon={<PlayCircleIcon />} />
			</div>
		</form>
	);
};

export { Form };
