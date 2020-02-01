import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Menu from './components/pages/Menu';
import Directions from './components/pages/Directions';
import Reservations from './components/pages/Reservations';
import Contact from './components/pages/Contact';
import KK from '/Users/jonkohen/Desktop/Portfolio/restaurant-project/src/images/KK.png';
import Customer from '/Users/jonkohen/Desktop/Portfolio/restaurant-project/src/images/Customer.jpeg';

import './App.css';

const topImage = {
    border: '1rem double #1f4261'
};

const hrStyle = {
    border: '1px solid #4d4d4d'
};

const reviewsTitle = {
    textDecoration: 'underline #fff599'
};

const customerImg = {
    border: '1rem double #1f4261'
};

export class App extends Component {
    // states
    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React-Fragment>
                                    <div className="row my-5">
                                        <div className="col">
                                            <h1 className="text-center">
                                                The Krusty Krab
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="row my-5">
                                        <div className="col">
                                            <h2 className="text-center">
                                                "Come spend yer money here!"
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="row my-3">
                                        <div className="col">
                                            <img
                                                style={topImage}
                                                className="img-fluid rounded-circle w-75 mx-auto d-block p-2"
                                                src={KK}
                                                alt="The Krusty Krab"
                                            />
                                        </div>
                                    </div>

                                    <Header />
                                    <div className="row my-5">
                                        <div className="col"></div>
                                        <div className="col-10">
                                            <hr style={hrStyle}></hr>
                                        </div>
                                        <div className="col"></div>
                                    </div>

                                    <div className="row">
                                        <div
                                            className="col"
                                            style={reviewsTitle}
                                        >
                                            <h1 className="text-center">
                                                Reviews
                                            </h1>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col mt-5">
                                            <ul className="list-unstyled">
                                                <li>
                                                    <blockquote className="text-center">
                                                        <span class="mb-0">
                                                            "Best Krabby Patty
                                                            this side of the
                                                            meridian!"
                                                        </span>
                                                        <footer class="blockquote-footer">
                                                            Someone famous from{' '}
                                                            <cite title="Source Title">
                                                                The Daily
                                                                Barnicle, ★★★★
                                                            </cite>
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                                <li>
                                                    <blockquote className="text-center">
                                                        <span class="mb-0">
                                                            "Admit it. You've
                                                            always wanted to
                                                            know what a Krabby
                                                            Patty tastes like."
                                                        </span>
                                                        <footer class="blockquote-footer">
                                                            Spongebob
                                                            Squarepants{' '}
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="row my-5">
                                        <div className="col mt-5">
                                            <ul className="list-unstyled mt-3">
                                                <li>
                                                    <blockquote className="text-center">
                                                        <span className="mb-0">
                                                            "10/10, would go
                                                            again!"
                                                        </span>
                                                        <footer className="blockquote-footer">
                                                            A Valued Customer
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <img
                                                style={customerImg}
                                                className="img-fluid rounded-circle w-75 mx-auto d-block p-2"
                                                src={Customer}
                                                alt="Valued Customer"
                                            />
                                        </div>{' '}
                                        <div className="col mt-5">
                                            <ul className="list-unstyled mt-3">
                                                <li>
                                                    <blockquote className="text-center">
                                                        <span className="mb-0">
                                                            "My leg! My
                                                            leg!!"&emsp;
                                                        </span>

                                                        <footer className="blockquote-footer">
                                                            The "My leg!" Guy{' '}
                                                        </footer>
                                                    </blockquote>
                                                </li>
                                            </ul>
                                        </div>{' '}
                                        {/* TODO: REVIEWS */}
                                    </div>
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
