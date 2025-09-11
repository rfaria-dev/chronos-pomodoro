import { useEffect, useState } from "react";
import type { TaskContextProviderProps } from "./types";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./task-context";

const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
	const [state, setState] = useState(initialTaskState);

	useEffect(() => {
		console.log("State updated: ", state);
	}, [state]);
	return (
		<TaskContext.Provider value={{ state, setState }}>
			{children}
		</TaskContext.Provider>
	);
};

export { TaskContextProvider };
