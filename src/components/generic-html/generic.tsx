import type { ReactNode } from "react";
import styles from "./generic-html.module.css";
type GenericHtmlProps = {
	children: ReactNode;
};

const GenericHtml = ({ children }: GenericHtmlProps) => {
	return <div className={`${styles.genericHtml}`}>{children}</div>;
};

export { GenericHtml };
