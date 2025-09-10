import { useContext } from "react";
import { TaskContext } from "./task-context";

const useTaskContext = () => {
	return useContext(TaskContext);
};

export { useTaskContext };
