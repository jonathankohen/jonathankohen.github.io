import React, { Component, useState } from 'react';
import Header from '../layout/Header';
// import Form from '../layout/Form';
// import Table from '../layout/Table';
import DatePicker from 'react-datepicker';
import Moment from 'react-moment';
// import 'moment-timezone';
import { Form, Field } from 'react-final-form';
import 'react-datepicker/dist/react-datepicker.css';

const customers = [
    {
        name: 'Nina',
        date: new Date().toLocaleString()
    },
    {
        name: 'Jon',
        date: new Date().toLocaleString()
    }
];

function Reservations() {
    const [data, setData] = useState(customers);
    const [date, changeDate] = useState(new Date());

    return (
        <React-Fragment>
            <Header />
            <h1>Reservations</h1>
            <div className="row">
                <div className="col">
                    <Form
                        onSubmit={body => {
                            setData([
                                { name: body.name, date: body.datey },
                                ...data
                            ]);
                            console.log(data, 'DAtatatatata');
                        }}
                        // initialValues={{ stooge: 'larry', employed: false }}
                        render={({
                            handleSubmit,
                            form,
                            submitting,
                            pristine,
                            values
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label>Name</label>
                                    <Field
                                        name="name"
                                        component="input"
                                        type="text"
                                        placeholder="name"
                                    />
                                </div>
                                <div>
                                    <label>Date</label>
                                    <DatePicker
                                        name="datey"
                                        className="form-control"
                                        selected={date}
                                        onChange={val => {
                                            changeDate(val);
                                            console.log('date', date);
                                        }}
                                    />
                                    {/* <Field FIXME:
                                        type="date"
                                        input={{ value: date }}
                                        component={() => (
                                            <DatePicker
                                                name="datey"
                                                className="form-control"
                                                selected={date}
                                                onChange={val => {
                                                    changeDate(val);
                                                    console.log('date', date);
                                                }}
                                            />
                                        )}
                                    /> */}
                                </div>
                                <div className="buttons">
                                    <button
                                        type="submit"
                                        disabled={submitting || pristine}
                                    >
                                        Submit
                                    </button>

                                    <button
                                        type="button"
                                        onClick={form.reset}
                                        disabled={submitting || pristine}
                                    >
                                        Reset
                                    </button>
                                </div>
                                <pre>{JSON.stringify(values, 0, 2)}</pre>{' '}
                            </form>
                        )}
                    />
                </div>

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
                        <tbody>
                            {data.map(customer => {
                                return (
                                    <React-Fragment>
                                        <tr>
                                            <td>{customer.name}</td>
                                            <td>
                                                {/* https://www.npmjs.com/package/react-moment  */}
                                                <Moment format="MM/DD/YYYY">
                                                    {customer.date}
                                                </Moment>
                                            </td>
                                        </tr>
                                    </React-Fragment>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </React-Fragment>
    );
}

export default Reservations;
