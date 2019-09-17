import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

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
          <PrivateRoute exact path="/protected" component={Friends}/>
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
