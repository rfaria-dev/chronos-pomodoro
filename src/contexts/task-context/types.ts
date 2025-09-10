import type { ReactNode } from "react";
import type { TaskStateModel } from "../../models/task-state-model";

type TaskContextProps = {
	state: TaskStateModel;
	setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

type TaskContextProviderProps = {
	children: ReactNode;
};

export type { TaskContextProps, TaskContextProviderProps };
