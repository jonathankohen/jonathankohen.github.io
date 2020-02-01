import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <Link to="/" style={linkStyle}>
                Home
            </Link>{' '}
            {' | '}
            <Link to="/menu" style={linkStyle}>
                Menu
            </Link>
            {' | '}
            <Link to="/directions" style={linkStyle}>
                Directions
            </Link>
            {' | '}
            <Link to="/reservations" style={linkStyle}>
                Reservations
            </Link>
            {' | '}
            <Link to="/contact" style={linkStyle}>
                Contact
            </Link>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
