import { TimerIcon } from "lucide-react";
import styles from "./logo.module.css";

const Logo = () => {
	return (
		<div className={styles.logo}>
			<a className={styles.logoLink} href="#">
				<TimerIcon size={64} />
				<span>Chronos</span>
			</a>
		</div>
	);
};

export { Logo };
