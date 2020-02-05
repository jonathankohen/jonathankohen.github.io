import React, { Component } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export class Form extends Component {
    render() {
        return (
            <div className="col">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group row text-center">
                        <div className="col">
                            <h3>Make a Reservation</h3>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Name:</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Enter full-name"
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Date:</label>
                        <div className="col-sm-10">
                            <DatePicker
                                className="form-control"
                                // selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group row">
                        <div className="col-sm-10">
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Form;
