import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./components/pages/home/home";
import { TaskContextProvider } from "./contexts/task-context/task-context-provider";

function App() {
	return (
		<TaskContextProvider>
			<Home />
		</TaskContextProvider>
	);
}

export default App;
