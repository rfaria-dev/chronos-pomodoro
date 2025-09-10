import { useTaskContext } from "../../contexts/task-context/use-task-context";
import styles from "./count-down.module.css";

const CountDown = () => {
	const { state } = useTaskContext();

	return (
		<div className={styles.container}>{state.formattedSecondsRemaining}</div>
	);
};

export { CountDown };
