import {
	HistoryIcon,
	HouseIcon,
	MoonIcon,
	SettingsIcon,
	SunIcon,
} from "lucide-react";
import styles from "./menu.module.css";
import { useEffect, useState } from "react";

type Themes = "dark" | "light";

const Menu = () => {
	const [theme, setTheme] = useState<Themes>(() => {
		const storageTheme = (localStorage.getItem("theme") as Themes) || "dark";
		return storageTheme;
	});

	const handleChangeTheme = (
		event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		event.preventDefault();
		setTheme((prevTheme: Themes) => {
			const nextTheme = prevTheme === "dark" ? "light" : "dark";
			return nextTheme;
		});
	};

	const nextThemeIcon = {
		light: <SunIcon />,
		dark: <MoonIcon />,
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	});

	return (
		<nav className={styles.menu}>
			<a
				className={styles.menuLink}
				href="#"
				title="Ir para a Home"
				aria-label="Ir para a home"
			>
				<HouseIcon />
			</a>
			<a
				className={styles.menuLink}
				href="#"
				title="Ver Historico"
				aria-label="Ver Historico"
			>
				<HistoryIcon />
			</a>
			<a
				className={styles.menuLink}
				href="#"
				title="Ir para Configs"
				aria-label="Ir para Configs"
			>
				<SettingsIcon />
			</a>
			<a
				className={styles.menuLink}
				href="#"
				title="Mudar Tema"
				aria-label="Mudar Tema"
				onClick={handleChangeTheme}
			>
				{nextThemeIcon[theme]}
			</a>
		</nav>
	);
};

export { Menu };
