import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import HomePage from './pages/Home';
import ChatPage from './pages/chat/ChatPage';
import CreateContestPage from './pages/contest/CreateContest';
import ProfilePage from './pages/profile/UpdateProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/chat" component={ChatPage} />
          <Route path="/create-contest" component={CreateContestPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    )
  }
}

export default App;