import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Navbar from './components/layouts/navbar/NavBar';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import HomePage from './pages/Home';

const token = localStorage.token;
class App extends Component {
  render() {
    return (
        <Router>
          <Navbar />

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