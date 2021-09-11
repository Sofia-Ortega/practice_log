import React from "react";
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/Login/Login"
import Dashboard from "./pages/Dashboard/Dashboard";
import SongPage from "./pages/SongPage/SongPage";

export default function App() {
  return (
    <Router>
      <div >
        <nav>
          <ul>
            <li>
              <Link to="/login">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/song">Song</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/song">
            <SongPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
