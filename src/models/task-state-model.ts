import type { TaskModel } from "./task-model";

type TaskStateModel = {
	tasks: Array<TaskModel>;
	secondsRemaining: number;
	formattedSecondsRemaining: string;
	activeTask: TaskModel | null;
	currentCycle: number;
	config: {
		workTime: number;
		shortBreakTime: number;
		longBreakTime: number;
	};
};

export type { TaskStateModel };
