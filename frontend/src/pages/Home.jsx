import React, { Component } from 'react';
import Footer from '../components/layouts/footer/Footer';
import NavBar from '../components/layouts/navbar/NavBar';
import HomeHero from '../components/layouts/home-hero/HomeHero';

class App extends Component {
  render() {
    return (
      <div>
        <HomeHero />
        <Footer />
      </div>
    );
  }
}

export default App;