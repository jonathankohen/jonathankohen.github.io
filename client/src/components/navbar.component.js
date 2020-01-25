import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
        <Link to='/' className='navbar-brand'>
          Monks Cafe
        </Link>

        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav mr-auto'>
            <li className='navbar-item'>
              <Link to='/' className='nav-link'>
                Reservations
              </Link>
            </li>

            <li className='navbar-item'>
              <Link to='/create' className='nav-link'>
                Create a Reservation
              </Link>
            </li>

            <li className='navbar-item'>
              <Link to='/edit/:id' className='nav-link'>
                Edit a Reservation
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
