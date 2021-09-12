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
import Appbar from "./components/Appbar";

export default function App() {
  return (
    <Router>
      <div >
        <Appbar />
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
