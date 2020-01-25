import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

export default class CreateReservations extends Component {
        constructor(props) {
            super(props);
            
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeDate = this.onChangeDate.bind(this);
            this.onSubmit = this.onSubmit.bind(this);

            this.state = {
                name: "",
                date: "",
            }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const reservation = {
            name: this.state.name,
            date: this.state.date,
        }

        console.log("test");

        axios.post("http://localhost:5000/reservations/add", reservation)
            .then(res => console.log(res.data));

        window.location = "/"
    }
    render() {
        return (
        <div>
            <h3>Create New Reservation</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" 
                        required
                        className="form-control"
                        value={this.state.name}
                        onChange={this.onChangeName}
                        />
                </div>

                <div className="form-group">
                    <label>Date: </label>
                    <div>
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <input type="submit" value="Create Reservation" className="btn btn-primary" />
                </div>
            </form>
        </div>
        )
    }
}