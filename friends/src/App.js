import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import './index.css';
import Login from "./components/Login";
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/Friends';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/protected">Friends</NavLink>
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
