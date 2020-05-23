import React, { Component } from 'react';

import Navigation from './components/layout/Navigation';
import Header from './components/layout/Header';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Portfolio from './components/pages/Portfolio';
import Skills from './components/pages/Skills';
import Contact from './components/pages/Contact';
import Footer from './components/layout/Footer';
import PopUp from './components/hoc/popUp';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Header />

        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Contact />

        <Footer />
        <PopUp />
      </React.Fragment>
    );
  }
}

export default App;
