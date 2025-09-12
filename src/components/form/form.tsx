import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { Button } from "../button";
import { Cycles } from "../cycles";
import { Input } from "../input";
import { useRef } from "react";
import type { TaskModel } from "../../models/task-model";
import { useTaskContext } from "../../contexts/task-context/use-task-context";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

const Form = () => {
	const { state, setState } = useTaskContext();
	const taskNameInput = useRef<HTMLInputElement>(null);
	const nextCycle = getNextCycle(state.currentCycle);
	const nextCycleType = getNextCycleType(nextCycle);

	const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (taskNameInput.current === null) {
			return;
		}
		const taskName = taskNameInput.current.value.trim();

		if (!taskName) {
			alert("Digite o nome da tarefa");
			return;
		}

		const newTask: TaskModel = {
			id: Date.now().toString(),
			name: taskName,
			duration: state.config[nextCycleType],
			startDate: Date.now(),
			completeDate: null,
			interruptDate: null,
			type: nextCycleType,
		};

		const secondsRemaining = newTask.duration * 60;

		setState((prevState) => {
			return {
				...prevState,
				activeTask: newTask,
				currentCycle: nextCycle,
				secondsRemaining,
				formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
				tasks: [...prevState.tasks, newTask],
				config: { ...prevState.config },
			};
		});
	};

	const handleInterruptTask = () => {
		setState((prevState) => {
			console.log("prevState.tasks: ", prevState.tasks);
			return {
				...prevState,
				activeTask: null,
				secondsRemaining: 0,
				formattedSecondsRemaining: "00:00",
				tasks: prevState.tasks.map((task) => {
					if (prevState.activeTask && prevState.activeTask.id === task.id) {
						return { ...task, interruptDate: Date.now() };
					}
					return task;
				}),
			};
		});
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
					ref={taskNameInput}
					disabled={!!state.activeTask}
				/>
			</div>
			<div className="formRow">
				<p>The next interval in : 25 min.</p>
			</div>
			<Cycles />
			<div className="formRow">
				{!state.activeTask && (
					<Button
						aria-label="iniciar nova tarefa"
						title="iniciar nova tarefa"
						type="submit"
						icon={<PlayCircleIcon />}
					/>
				)}
				{state.activeTask && (
					<Button
						aria-label="Interromper nova tarefa"
						title="Interromper nova tarefa"
						type="button"
						icon={<StopCircleIcon />}
						color="red"
						onClick={() => handleInterruptTask()}
					/>
				)}
			</div>
		</form>
	);
};

export { Form };
