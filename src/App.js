import React from 'react';
import './App.css';
import logo from './assets/images/logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './views/Home';
import About from './views/About';
import List from './views/List';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={logo} width="30" height="30"
               className="d-inline-block align-top" alt=""/>
          Mhs<b>List</b>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/list">List</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" exact component={About}/>
          <Route path="/list" exact component={List}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
