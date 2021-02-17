import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const newHistory = createBrowserHistory();

function App() {
	return (
		<Router history={newHistory}>
			<div className='App'>
				<Navbar />
				{/*<Switch>
					<Route exact path='/'>
						<Redirect to='home' />
					</Route>
					<Route path='/home' component={Navbar} />
        </Switch>*/}
			</div>
		</Router>
	);
}

export default App;
