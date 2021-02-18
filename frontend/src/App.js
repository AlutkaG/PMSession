import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AboutConference from "./Components/AboutConference/AboutConference";
import Statistics from "./Components/Statistics/Statistics";
import Thoughts from "./Components/Thoughts/Thoughts";
import TopWave from "./Components/TopWave/TopWave";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();

function App() {
	return (
		<Router history={newHistory}>
			<div className='App'>
				<Navbar />
				<TopWave />
				<AboutConference />
				<Statistics />
				<Thoughts />
			</div>
		</Router>
	);
}

export default App;
