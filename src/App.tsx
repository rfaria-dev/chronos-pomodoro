import "./styles/theme.css";
import "./styles/global.css";
import { Home } from "./components/pages/home/home";
import { useState } from "react";
import type { TaskStateModel } from "./models/task-state-model";

function App() {
	const initialState: TaskStateModel = {
		tasks: [],
		secondsRemaining: 0,
		formattedSecondsRemaining: "00:00",
		activeTask: null,
		currentCycle: 0,
		config: {
			workTime: 25,
			shortBreakTime: 5,
			longBreakTime: 15,
		},
	};

	const [state, setState] = useState(initialState);
	return (
		<>
			<Home state={state} setState={setState} />
		</>
	);
}

export default App;
