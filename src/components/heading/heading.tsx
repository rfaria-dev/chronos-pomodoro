import type { ReactNode } from "react";
import styles from "./heading.module.css";

type HeadingProps = {
	children: ReactNode;
};

const Heading = ({ children }: HeadingProps) => {
	return <h1 className={styles.heading}>{children}</h1>;
};

export { Heading };
