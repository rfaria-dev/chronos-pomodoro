import { useTaskContext } from "../../contexts/task-context/use-task-context";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./cycles.module.css";

const Cycles = () => {
	const { state } = useTaskContext();
	const cycleStep = Array.from({ length: state.currentCycle });
	const cycleDescriptionMap = {
		workTime: "foco",
		shortBreakTime: "parada curta",
		longBreakTime: "parada longa",
	};

	if (state.currentCycle === 0) {
		return;
	}

	return (
		<div className={styles.cycles}>
			<span>Ciclos:</span>
			<div className={styles.cycleDots}>
				{cycleStep.map((_, index) => {
					const nextCycle = getNextCycle(index);
					const nextCycleType = getNextCycleType(nextCycle);
					return (
						<span
							key={`${nextCycleType}-${nextCycle}`}
							id={`${nextCycleType}-${nextCycle}`}
							aria-label={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
							title={`Indicador de ${cycleDescriptionMap[nextCycleType]}`}
							className={`${styles.cycleDot} ${styles[nextCycleType]}`}
						></span>
					);
				})}
				{/* <span className={`${styles.cycleDot} ${styles.workTime}`}></span> */}
			</div>
		</div>
	);
};

export { Cycles };
