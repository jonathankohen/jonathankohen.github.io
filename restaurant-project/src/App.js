import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Menu from './components/pages/Menu';
import Directions from './components/pages/Directions';
import Reservations from './components/pages/Reservations';
import Contact from './components/pages/Contact';

import './App.css';

export class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React-Fragment>
                                    <h1>The Krusty Krab</h1>
                                </React-Fragment>
                            )}
                        />
                        <Route path="/menu" component={Menu} />
                        <Route path="/directions" component={Directions} />
                        <Route path="/reservations" component={Reservations} />
                        <Route path="/contact" component={Contact} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
