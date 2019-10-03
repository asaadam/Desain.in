import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import HomePage from './pages/Home';

const token = localStorage.token;
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage} exact />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </Router>
    )
  }
}

export default App;