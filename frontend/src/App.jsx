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
          {token && <Redirect from="/login" to="/" exact/>}
          {token && <Redirect from="/register" to="/" exact/>}
          
          {!token && (<Route path="/login" component={LoginPage}/>)}
          {!token && (<Route path="/register" component={RegisterPage}/>)}

          <Route path="/" component={HomePage} exact/>

        </Switch>
      </Router>
    )
  }
}

export default App;