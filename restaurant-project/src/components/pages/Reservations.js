import React, { Component } from 'react';
import Header from '../layout/Header';
import Form from '../layout/Form';
import Table from '../layout/Table';

export class Reservations extends Component {
    render() {
        return (
            <React-Fragment>
                <Header />
                <h1>Reservations</h1>
                <div className="row">
                    <Form />
                    <Table />
                </div>
            </React-Fragment>
        );
    }
}

export default Reservations;
