import React, { Component } from 'react';
import Header from '../layout/Header';

export class Contact extends Component {
    render() {
        return (
            <React-Fragment>
                <Header />
                <h1>Contact</h1>
                <h2>Yarg! We'd love to hear from ye!</h2>
                <div className="row">
                    <div className="col"></div> {/* TODO: SUBMISSION FORM */}
                </div>
            </React-Fragment>
        );
    }
}

export default Contact;
