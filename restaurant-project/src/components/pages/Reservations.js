import React, { Component } from 'react';
import Header from '../layout/Header';

export class Reservations extends Component {
    render() {
        return (
            <React-Fragment>
                <Header />
                <h1>Reservations</h1>
                <div className="row">
                    <div className="col"></div> {/* TODO: FORM */}
                    <div className="col"></div> {/* TODO: TABLE */}
                </div>
            </React-Fragment>
        );
    }
}

export default Reservations;
