import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import "/Users/jonkohen/Desktop/restaurant-project/client/src/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ReservationsList from "./components/reservations-list.component";
import EditReservation from "./components/edit-reservation.component";
import CreateReservation from "./components/create-reservation.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ReservationsList} />
        <Route path="/edit/:id" component={EditReservation} />
        <Route path="/create" component={CreateReservation} />
      </div>
    </Router>
  );
}

export default App;
