import "./styles/theme.css";
import "./styles/global.css";

import { Container } from "./components/container";
import { Logo } from "./components/logo";
import { Menu } from "./components/menu";
import { CountDown } from "./components/count-down";
import { Form } from "./components/form";
import { Footer } from "./components/footer";

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
			<Container>
				<Form />
			</Container>
			<Container>
				<Footer />
			</Container>
		</>
	);
}

export default App;
