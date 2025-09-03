import type { ReactNode } from "react";
import styles from "./container.module.css";

type ContainerProps = {
	children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
	return (
		<div className={styles.container}>
			<div className={styles.content}>
				<section>{children}</section>
			</div>
		</div>
	);
};

export { Container };
