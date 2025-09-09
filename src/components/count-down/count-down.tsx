import type { HomeProps } from "../pages/home/home";
import styles from "./count-down.module.css";

type CountDownProps = HomeProps;

const CountDown = ({ state }: CountDownProps) => {
	return (
		<div className={styles.container}>{state.formattedSecondsRemaining}</div>
	);
};

export { CountDown };
