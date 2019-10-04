import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/navbar/NavBar';
import LoginPage from './pages/auth/Login';
import RegisterPage from './pages/auth/Register';
import HomePage from './pages/Home';
import ChatPage from './pages/chat/ChatPage';
import CreateContestPage from './pages/contest/CreateContest';
import ProfilePage from './pages/profile/UpdateProfile';
import Rekomendasi from './pages/rekomendasi/rekomendasi';
import RekomendasiStyleChose from './pages/rekomendasi/rekomendasiStyleChose';
import RekomendasiStylePerson from './pages/rekomendasi/rekomendasiStylePerson';



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
          <Route path="/rekomendasi" component={Rekomendasi}/>
          <Route path="/rekomendasiStyle" component={RekomendasiStyleChose}/>
          <Route path="/rekomendasiPerson" component={RekomendasiStylePerson}/>
        </Switch>
      </Router>
    )
  }
}



export default App;