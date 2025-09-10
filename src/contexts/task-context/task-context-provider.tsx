import { useState } from "react";
import type { TaskContextProviderProps } from "./types";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./task-context";

const TaskContextProvider = ({ children }: TaskContextProviderProps) => {
	const [state, setState] = useState(initialTaskState);
	return (
		<TaskContext.Provider value={{ state, setState }}>
			{children}
		</TaskContext.Provider>
	);
};

export { TaskContextProvider };
