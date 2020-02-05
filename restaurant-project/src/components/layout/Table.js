import React, { Component } from 'react';

export class Table extends Component {
    render() {
        return (
            <div className="col">
                <table className="table">
                    <thead>
                        <tr>
                            <td>
                                <h3>Current Reservations</h3>
                            </td>
                        </tr>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody id="reservationsBody">
                        <tr>
                            <th scope="row">A Valued Customer</th>
                            <td>01/01/20</td>
                        </tr>
                        <tr>
                            <th scope="row">Another Valued Customer</th>
                            <td>01/02/20</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Table;
