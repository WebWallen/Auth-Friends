import React from 'react';
import { BrowserRouter as Router, Route, PrivateRoute, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        Let's do It.
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            Friends
          </li>
        </ul>
        <Switch>
          {/* <PrivateRoute></PrivateRoute>  */}
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
