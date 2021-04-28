import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import HomePage from "./components/Home"


export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/artists">
            <NavbarComponent />
          </Route>
          <Route path="/lookbook">
            <NavbarComponent />
          </Route>
          <Route path="/accessories">
            <NavbarComponent />
          </Route>
					<Route path="/apperal">
            <NavbarComponent />
          </Route>
					<Route path="/memes">
            <NavbarComponent />
          </Route>
					<Route path="/">
            <NavbarComponent />
						<HomePage />
          </Route>
        </Switch>
    </Router>
  );
}

