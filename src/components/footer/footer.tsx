import styles from "./footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<a href="#"> Entenda como funciona a tecnica pomodoro</a>
			<a href="#"> Chronos Pomodoro &copy; {new Date().getFullYear()}.</a>
		</footer>
	);
};

export { Footer };
