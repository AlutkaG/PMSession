import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AboutConference from "./Components/AboutConference/AboutConference";
import Statistics from "./Components/Statistics/Statistics";
import Thoughts from "./Components/Thoughts/Thoughts";
import TopWave from "./Components/TopWave/TopWave";
import Sponsors from "./Components/Sponsors/Sponsors";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useState } from "react";

const newHistory = createBrowserHistory();

function App() {
	const [sidenavOpen, setSidenavOpen] = useState(false);

	const openHandler = () => {
		setSidenavOpen(!sidenavOpen);
	};

	const closeNav = () => {
		setSidenavOpen(!sidenavOpen);
	};

	return (
		<Router history={newHistory}>
			<div className='App'>
				<Navbar openClickHandler={openHandler} />
				<SideNavbar show={sidenavOpen} onClose={closeNav} />
				<TopWave />
				<AboutConference />
				<Statistics />
				<Thoughts />
				<Sponsors />
			</div>
		</Router>
	);
}

export default App;
