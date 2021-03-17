import Navbar from "./Components/Navbar/Navbar";
import SideNavbar from "./Components/SideNavbar/SideNavbar";
import Schedule from "./Components/Schedule/Schedule";
import FirstPage from "./Components/FirstPage/FirstPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useState } from "react";

function App() {
  const [sidenavOpen, setSidenavOpen] = useState(true);

  const openHandler = () => {
    setSidenavOpen(!sidenavOpen);
  };

  const closeNav = () => {
    setSidenavOpen(!sidenavOpen);
  };

  return (
    <HashRouter>
      <div className="App">
        <Navbar openClickHandler={openHandler} />
        <SideNavbar show={sidenavOpen} onClose={closeNav} />
        <Switch>
          <Route exact path="/">
            <Redirect to="firstPage" />
          </Route>
          <Route path="/firstPage" component={FirstPage} />
          <Route path="/schedule" component={Schedule} />
          <Route path="*">
            <Redirect to="/firstPage" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
