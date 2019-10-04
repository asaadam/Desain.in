import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/navbar/NavBar';
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
        <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
        <Navbar/>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/chat" component={ChatPage} />
          <Route path="/create-contest" component={CreateContestPage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </Router>
    )
  }
}



export default App;