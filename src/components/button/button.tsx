import type { ReactNode } from "react";
import styles from "./button.module.css";

type ButtonProps = {
	icon: ReactNode;
	color?: "green" | "red";
} & React.ComponentProps<"button">;

const Button = ({ icon, color = "green", ...props }: ButtonProps) => {
	return (
		<>
			<button className={`${styles.button} ${styles[color]}`} {...props}>
				{icon}
			</button>
		</>
	);
};

export { Button };
