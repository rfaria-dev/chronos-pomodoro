import type { TaskStateModel } from "./task-state-model";

type TaskModel = {
	id: string;
	name: string;
	duration: number;
	startDate: number;
	completeDate: number | null;
	interruptDate: number | null;
	type: keyof TaskStateModel["config"];
};

export type { TaskModel };
