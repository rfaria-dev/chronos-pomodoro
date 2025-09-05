import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/menu";
import { CountDown } from "./components/count-down";

function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Menu />
			</Container>
			<Container>
				<CountDown />
			</Container>
		</>
	);
}

export default App;
