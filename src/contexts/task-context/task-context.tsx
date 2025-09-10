import { createContext } from "react";
import { initialTaskState } from "./initialTaskState";
import type { TaskContextProps } from "./types";

const initialContextValue = {
	state: initialTaskState,
	setState: () => {},
};

const TaskContext = createContext<TaskContextProps>(initialContextValue);

export { TaskContext };
