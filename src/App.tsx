import "./style/theme.css";
import "./style/global.css";

import { Container } from "./components/container";
import { Heading } from "./components/heading";
import { Logo } from "./components/logo";

function App() {
	return (
		<>
			<Container>
				<Logo />
			</Container>
			<Container>
				<Heading>MENU</Heading>
			</Container>
		</>
	);
}

export default App;
